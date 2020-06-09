import React, { Component } from 'react'
import './Menu.css'

import { Link } from 'react-router-dom'

export default class Menu extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark cor">
                <Link className="navbar-brand" to="#">Menu</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#conteudoNavbarSuportado" aria-controls="conteudoNavbarSuportado" aria-expanded="false" aria-label="Alterna navegação">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="conteudoNavbarSuportado">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <Link className="nav-link" to="/">Home <span className="sr-only">(página atual)</span></Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/videos">Videos</Link>
                        </li>
                        <li className="nav-item dropdown">
                            <Link className="nav-link dropdown-toggle" to="/" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Cadastro
                            </Link>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <Link className="dropdown-item" to="/Cadastro">Video</Link>
                                <Link className="dropdown-item disabled" to="#">Usuários</Link>
                                <div className="dropdown-divider"></div>
                                <Link className="dropdown-item disabled" to="#"></Link>
                            </div>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/Teste">CNPJ</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}