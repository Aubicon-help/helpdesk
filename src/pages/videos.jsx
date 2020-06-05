import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Videos extends Component {

    constructor(props) {
        super(props)
        this.state = {
            itens: [],
        }
    }

    componentDidMount() {

        let { id } = this.props.match.params

        const url = `https:/hamiltondeveloper-com-br.umbler.net/videos`

        fetch(url)
            .then(res => res.json())
            .then(json => {
                this.setState({
                    itens: json,
                })
            });
    }


    render() {

        var { itens } = this.state;

        return (
            <div>
                <div className="container">
                    <div className="row my-2">
                        <div className="col-sm-12">
                            <table className="table table-striped table-hover">
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Titulo</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {itens.map(item => (
                                        <tr key={item.pk_id}>
                                            <td> {item.pk_id} </td>
                                            <td>
                                                <Link to={`video/${item.pk_id}`}> {item.tx_titulo}</Link>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}