import React, { useState, useEffect } from "react";

const HomeContainer = () => {
    const [pokemon,setPokemon] = React.useState(null)
    React.useEffect(()=>{
        console.log('useEffect')
        obtenerPokemon()
    },[])

    const obtenerPokemon = async ()=>{
        const data = await fetch('https://pokeapi.co/api/v2/pokemon/3/')
        const poke = await data.json()
        console.log(poke)
    }
    return ( 
        <div>
            <h1>POKEAPP</h1>

        </div>
     );
}
 
export default HomeContainer;
