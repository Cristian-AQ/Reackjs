import React from 'react'
import { withStyles } from '@material-ui/core/styles';/* permite modificar estilos de M-UI */
import { AppBar,Toolbar,Typography } from '@material-ui/core';
import {Link} from 'react-router-dom'
const AppNav = (props) => {
    const {classes} = props
    return ( 
        <div>
        <AppBar className={classes.NavColor} position='static'>
            <Toolbar variant='dense'>
                <Typography variant='h6' component='p' >
                    <Link to={'/pokemons'}>PokeApp</Link>
                </Typography>
            </Toolbar>
        </AppBar>
        </div>
     );
}
export default withStyles({
    NavColor:{
        backgroundColor: '#EF5350'
    }
}) (AppNav);