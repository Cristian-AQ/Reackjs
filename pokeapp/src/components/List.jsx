import React from "react"
import PokeCard from "./PokeCard";
import { Grid } from "@material-ui/core";

const List = ({pokemon}) => {
    return ( 
        <>
            <Grid container justify='center'>
                {pokemon.map((poke,index) =>{
                    let url = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'
                    let pokeIndex = poke.url.split('/')[6]
                    console.log(pokeIndex)
                    return <PokeCard to={`/poke-info/${pokeIndex}/${poke.name}`} key={index} name={poke.name} image={`${url}${pokeIndex}.png`} />
                })}
            </Grid>
        </>
     );
}
 
export default List;