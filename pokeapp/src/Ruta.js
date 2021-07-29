import React from "react"
import {Switch,Route} from 'react-router-dom'
import Carman from "./components/Carman";
import Home from "./components/Home";
import PokeListContainer from "./containers/PokeListContainer";
import PokeInfoContainer from "./containers/PokeInfoContainer";

const Ruta = () => {
    return ( 
        <Switch>
            <Route path='/pokemons' component={PokeListContainer} />
            <Route exact path='/poke-info/:pokeIndex/:pokeName' component={PokeInfoContainer} />
            <Route path='/' component={Home} />
        </Switch>
     );
}
 
export default Ruta;