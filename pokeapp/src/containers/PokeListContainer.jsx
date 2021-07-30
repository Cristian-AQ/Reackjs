/* AQUI HAREMOS LA PETICION A LA API */
import React, { useState } from "react";
import AppNav from "../components/AppNav";
import List from '../components/List'

const PokeListContainer = () => {
    
    const [pokemon,setPokemon] = useState([])
    React.useEffect(()=>{
        console.log('useEffect')
        obtenerPokemon()
    },[])

    const [siguiente,setSiguiente] = useState({
        next:""
    })
    const [anterior,setAnterior] = useState({
        previous:""
    })

    const obtenerPokemon = async ()=>{
        const data = await fetch('https://pokeapi.co/api/v2/pokemon')
        const poke = await data.json()
        console.log(poke.results)
        setPokemon(poke.results)/* envia los resultado de la api */
        setSiguiente(poke.next)
        setAnterior(poke.previous)
    }
    const siguientePokemon = async ()=>{
        const data = await fetch(siguiente)  
        const poke = await data.json()
        console.log(poke.results)
        setPokemon(poke.results)/* envia los resultado de la api */
        setSiguiente(poke.next)
        setAnterior(poke.previous)
    }
    const anteriorPokemon = async ()=>{
        const data = await fetch(anterior)  
        const poke = await data.json()
        console.log(poke.results)
        setPokemon(poke.results)/* envia los resultado de la api */
        setSiguiente(poke.next)
        setAnterior(poke.previous)
    }
    return ( 
        <>
            <AppNav />
            <button onClick={anteriorPokemon}>Anterior</button>
            <button onClick={siguientePokemon}>Siguiente</button>
            <List pokemon={pokemon} />
        </>
     );
}
 
export default PokeListContainer;