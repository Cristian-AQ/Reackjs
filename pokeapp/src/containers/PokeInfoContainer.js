import React,{Component} from 'react';
import PokeDescription from '../components/PokeDescription';
import AppNav from '../components/AppNav';

import axios from "axios";
class PokeInfoContainer extends Component{

    constructor(props){
        super(props);
        
        this.state = {
            pokemonDescription:'',
        }
    }

    componentDidMount(){
        const {match} = this.props;
        const descriptionID = match.params.pokeIndex
        const PokeDescriptionUrl=`${process.env.REACT_APP_POKE_API_BASE_URL}pokemon-species/${descriptionID}/`;
        axios.get(PokeDescriptionUrl)
        .then(res =>{
            const{ flavor_text_entries} = res.data;
            this.setState({
                pokemonDescription: flavor_text_entries[11].flavor_text
            })
        })
    }
    render(){
    const {match} = this.props;
    let url = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'
    const pokeId= match.params.pokeIndex;  
    const pokeName = match.params.pokeName;  
    const {pokemonDescription} = this.state;
    return ( 
        <>
        <AppNav />
        <PokeDescription 
            name={pokeName} 
            pokeImage={`${url}${pokeId}.png`} 
            description={pokemonDescription} 
            />
        </>
     );
    }
}
 
export default PokeInfoContainer;