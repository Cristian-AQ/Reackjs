import React from 'react'
import { Card, CardMedia, CardContent, Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';

const PokeCard = ({name,classes,image,to}) => {
    
    return ( 
        <Card className={classes.item}>
            <Link to={to}><CardMedia className={classes.media} image={image} /></Link>
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
        textAlign:'center'
    },
    media:{
        height:'250px'
    }

}) (PokeCard);