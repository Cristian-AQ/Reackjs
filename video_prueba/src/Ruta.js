import React from "react"
import {Switch,Route} from 'react-router-dom'
import Home from "./components/Home";
import navegador from "./components/navegador";

const Ruta = () => {
    return ( 
        <Switch>
            <Route path='/' component={navegador} />
        </Switch>
     );
}
 
export default Ruta;