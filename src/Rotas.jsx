import React from 'react'
import App from './App'
import Videos from './pages/videos'
import Video from './pages/video'
import Cadastro from './pages/Cadastro'
import { Route, Switch } from 'react-router-dom'

export default props =>
    <Switch>
        <Route exact path="/" component={App} />
        <Route exact path="/video/:id" component={Video} />
        <Route exact path="/videos" component={Videos} /> 
       <Route exact path="/Cadastro" component={Cadastro} />
    </Switch>


