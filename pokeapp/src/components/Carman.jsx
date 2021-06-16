import React from 'react'
import { Card, CardActions, CardContent, Typography  } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import { display } from '@material-ui/system';

const Carman = (props) => {
    const {classes} = props
    return ( 
        <Card className={classes.prin}>
            <div className={classes.conten}>
                <CardContent >
                    <Typography className={classes.tile}>Material</Typography>
                </CardContent>
                <CardActions>
                        <Button className={classes.btn} size="large" variant="contained" color="primary">SUBIR</Button>
                </CardActions>
            </div>
        </Card>
     );
}
 
export default withStyles({
    prin:{
        display:'flex',
        margin: '40px',
        border:'2px solid',
        borderRadius: '10px',
        
    },
    tile:{
        fontSize: 40,
        margin:'10px',
    },
    item:{
        margin:'1em',
        borde: '1px solid',
        boxSizing:'border-box',
    },
    btn:{
        margin:'5px',
    },
    conten:{
        display:'flex',
        flexDirection:'row',
    }
}) (Carman);