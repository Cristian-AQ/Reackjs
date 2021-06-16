import React from 'react'
import { withStyles } from '@material-ui/core/styles';/* permite modificar estilos de M-UI */
import { AppBar,Toolbar,Typography } from '@material-ui/core';
const AppNav = (props) => {
    const {classes} = props
    return ( 
        <div>
        <AppBar className={classes.NavColor} position='static'>
            <Toolbar variant='dense'>
                <Typography variant='h6' component='p' >
                    PokeApp
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