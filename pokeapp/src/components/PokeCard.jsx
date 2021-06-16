import React from 'react'
import { Card, CardMedia, CardContent, Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

const PokeCard = ({name,classes,image}) => {
    
    return ( 
        <Card className={classes.item}>
            <CardMedia className={classes.media} image={image} />
            <CardContent>
                <Typography component='p' variant='h6' >{name}</Typography>
            </CardContent>
        </Card>
     );
}
 
export default withStyles({
    item:{
        minWidth:'300px',
        margin:'1em',
        boxSizing:'border-box',
        textAlign:'center'

    },
    media:{
        height:'200px'
    }

}) (PokeCard);