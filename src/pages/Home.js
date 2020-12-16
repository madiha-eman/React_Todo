import React from 'react'
import Grid from '@material-ui/core/Grid'
import Banner from '../images/banner.jpg'
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
  img:{
      width:'100%',
      height: '400px'
  },
  container:{
      marginTop:'30px'
  }
}));

function Home() {
    const classes = useStyles();
    return (
        <div>
            <Grid item xs={12} className={classes.container}>
                <img className={classes.img} src={Banner} alt='banner'/>
            </Grid>
            
        </div>
    )
}

export default Home
