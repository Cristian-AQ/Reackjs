import React from "react"
import {Switch,Route} from 'react-router-dom'
import Carman from "./components/Carman";
import Home from "./components/Home";
import PokeListContainer from "./containers/PokeListContainer";

const Ruta = () => {
    return ( 
        <Switch>
            <Route path='/pokemons' component={Carman} />
            <Route path='/' component={Home} />
        </Switch>
     );
}
 
export default Ruta;