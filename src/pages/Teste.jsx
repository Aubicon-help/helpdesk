import React from 'react';
import axios from 'axios';



export default class Teste extends React.Component {
    state = {
        dados: {},
        cnpj: ''
    }


cnpj = (e) => {
    this.setState({ [e.target.name]: e.target.value })

}

submitHandler = (e) => {
    e.preventDefault()
    const url = `https://cors-anywhere.herokuapp.com/www.receitaws.com.br/v1/cnpj/${this.state.cnpj}`
    axios.get(url)
        .then(res => {
            //let base = res
            this.setState({ dados: res.data });
        })
}

render() {

    const { dados, cnpj } = this.state;

    return (
        <div className="container">
                
            <form onSubmit={this.submitHandler} className="my-3">
                <legend>Consulta CNPJ</legend>
                <div className="form-group">   
                    <input type="number" name="cnpj" value={cnpj} onChange={this.cnpj} />
                </div>
                <input type="submit" className="btn btn-primary" value="buscar" />
            </form>
            
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>CNPJ</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{dados.nome}</td>
                        <td>{dados.cnpj}</td>
                    </tr>
                </tbody>
            </table>


        </div>
    )
}

}