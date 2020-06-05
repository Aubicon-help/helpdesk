import React, { Component } from 'react'
import './Header.css'
import Aubicon from '../Assests/img/aubicon.png'


export default class Header extends Component{
    render(){
        return(
            <div className="Header">
                <img src={Aubicon} alt="" />
                <h1 className="branco">HelpDesk Online</h1>
            </div>
        )
    }
}