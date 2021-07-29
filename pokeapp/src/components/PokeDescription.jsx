import React from 'react';
import { Grid,Card,Typography } from '@material-ui/core';
import PokeCard from './PokeCard';

const PokeDescription = ({pokeImage,name,description}) => {
    return ( 
        <Grid container>
            <PokeCard image={pokeImage} name={name}></PokeCard>
            <Card>
                <Typography variant='body1' component='p'>{description}</Typography>
            </Card>
        </Grid>
     );
}
 
export default PokeDescription;