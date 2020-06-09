
import React, { Component } from 'react'
import axios from 'axios';
import './Footer.css'
import { Link } from 'react-router-dom'

export default class Footer extends Component {
    state = {
        dados: {}
    }

    componentDidMount() {
        const url = `https://cors-anywhere.herokuapp.com/www.receitaws.com.br/v1/cnpj/09603174000113`
        axios.get(url)
            .then(res => {
                //let base = res
                this.setState({ dados: res.data });
            })

    }
    render() {
        var { dados } = this.state;
        console.log(dados)
        return (
            <div>
                <div className="mt-5 pt-5 pb-5 footer">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-5 col-xs-12 about-company">
                                <h2 className="header">{dados.nome}</h2>
                                <p className="pr-5 text-white-50">{dados.cnpj} </p>
                                <p><Link to="#"><i className="fa fa-facebook-square mr-1"></i></Link><Link to="#"><i className="fa fa-linkedin-square"></i></Link></p>
                            </div>
                            <div className="col-lg-3 col-xs-12">
                                <h4 className="mt-lg-0 mt-sm-3">Links</h4>
                                <ul className="m-0 p-0">
                                    <li>- <Link style={{ color: "white" }} to="#">Lorem ipsum</Link></li>
                                    <li>- <Link style={{ color: "white" }} to="#">Nam mauris velit</Link></li>
                                    <li>- <Link style={{ color: "white" }} to="#">Etiam vitae mauris</Link></li>
                                    <li>- <Link style={{ color: "white" }} to="#">Fusce scelerisque</Link></li>
                                    <li>- <Link style={{ color: "white" }} to="#">Sed faucibus</Link></li>
                                    <li>- <Link style={{ color: "white" }} to="#">Mauris efficitur nulla</Link></li>
                                </ul>
                            </div>
                            <div className="col-lg-4 col-xs-12 location">
                                <h4 className="mt-lg-0 mt-sm-4">Localização</h4>
                                <p>Extrema - MG / CEP: 37640-000</p>
                                <p>Av. Brasil, 549    </p>
                                <p className="mb-0"><i className="fa fa-phone mr-3"></i>+55 (35) 3435-3410</p>
                                <p><i className="fa fa-envelope-o mr-3"></i><Link style={{ color: "white" }} to="www.aubicon.com.br">www.Aubicon.com.br</Link></p>
                            </div>
                        </div>
                        <div className="row mt-5">
                            <div className="col copyright">
                                <p className=""><small className="text-white-50">© 2020. All Rights Reserved.</small></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )

    }
}