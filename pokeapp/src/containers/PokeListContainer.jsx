/* AQUI HAREMOS LA PETICION A LA API */
import React, { useState, useEffect } from "react";
import AppNav from "../components/AppNav";
import List from '../components/List'

const PokeListContainer = () => {
    const [pokemon,setPokemon] = useState([])
    React.useEffect(()=>{
        console.log('useEffect')
        obtenerPokemon()
    },[])

    const obtenerPokemon = async ()=>{
        const data = await fetch('https://pokeapi.co/api/v2/pokemon')
        const poke = await data.json()
        console.log(poke.results)
        setPokemon(poke.results)/* envia los resultado de la api */
    }
    return ( 
        <>
            <AppNav />
            <List pokemon={pokemon} />
        </>
     );
}
 
export default PokeListContainer;