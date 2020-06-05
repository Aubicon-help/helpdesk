import React, { Component } from 'react'
import Axios from 'axios'

export default class Cadastro extends Component {

    constructor(props) {
        super(props)

        this.state = {
            titulo: '',
            sistema: '',
            youtube: '',
            detalhes: '',
            status: ''
        }
    }

    changeHandler = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    submitHandler = (e) => {
        e.preventDefault()
        console.log(this.state)
        Axios.post('https:/hamiltondeveloper-com-br.umbler.net/cadastro', this.state)
            .then(resp => {
                if (resp.data.status === 'SUCESSO') {
                    this.setState({
                        status:
                            <div className="alert alert-success alert-dismissible fade show" role="alert">
                                <strong>Sucesso!</strong> o seu cadastro foi realizado com sucesso!
                                <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                    })
                }

                if (resp.data.status === 'vazio') {
                    this.setState({
                        status:
                            <div className="alert alert-danger alert-dismissible fade show" role="alert">
                                <strong>Erro!</strong> Por favor preencher todos os campos!
                                <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                    })
                }
            })
            .catch(erro => {
                console.log(erro)
            })
    }


    render() {

        const { titulo, sistema, youtube, detalhes, status } = this.state

        return (
            <div className="container">
                <div className="row">
                    <div className="col-sm-12 col-md-6 mx-auto my-3">
                        {status}
                        
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-12 col-md-6 mx-auto">
                        <form onSubmit={this.submitHandler}>
                            <legend>Cadastro de videos</legend>
                            <div className="form-group">
                                <label htmlFor="titulo">Titulo</label>
                                <input type="text" className="form-control" name="titulo" value={titulo} onChange={this.changeHandler} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleFormControlSelect2">Sistemas</label>
                                <select className="form-control" id="exampleFormControlSelect2" name="sistema" value={sistema} onChange={this.changeHandler} >
                                    <option value='sap'>SAP</option>
                                    <option value='docsales'>DocSales</option>
                                    <option value='agendor'>Agendor</option>
                                    <option value='voip'>VoIP</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label htmlFor="Youtube">Youtube</label>
                                <input type="text" className="form-control" name="youtube" value={youtube} onChange={this.changeHandler} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="Detlhes">Detlhes</label>
                                <input type="text" className="form-control" name="detalhes" value={detalhes} onChange={this.changeHandler} />
                            </div>
                            <button type="submit" className="btn btn-primary">Enviar</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}