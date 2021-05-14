import './App.css';
import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Anime from 'react-anime';

import {
  Button,
  Container,
  Grid,
  Toolbar
} from '@material-ui/core';

import logo from './assets/logo.png';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    fontFamily: 'Now, sans-serif',
    color: 'white',
    fontSize: '25px',
    letterSpacing: '3px',
  },
  title: {
    flexGrow: 1,
  },
}));

function Menu(props) {

  const classes = useStyles();

  var op;

  if (props.click == true) {
    op = 1;
  }
  else {
    op = [0, 1];
  }

  return (
    <Container maxWidth="xl">
      <Grid container direction="column" justify="center" alignItems="center" style={{minHeight: '80vh'}}>
        <Grid container item xs={4} justify="center">
            <Anime easing="linear" duration={1000} delay={200} opacity={op}>
              <img src={logo} style={{width: "100%"}}/>
            </Anime>
        </Grid>
        <Grid container item xs={2} justify="center">
            <Toolbar>
              <Anime easing="linear" duration={1000} delay={600} opacity={op}>
                <Button onClick={() => props.onClick({option: 1})} className={classes.menuButton}>About</Button>
              </Anime>
              <Anime easing="linear" duration={1000} delay={1000} opacity={op}>
                <Button onClick={() => props.onClick({option: 2})} className={classes.menuButton}>Contact</Button>
              </Anime>
              <Anime easing="linear" duration={1000} delay={1400} opacity={op}>
                <Button onClick={() => props.onClick({option: 3})} className={classes.menuButton}>Projects</Button>
              </Anime>
            </Toolbar>
        </Grid>
      </Grid>
    </Container>
  );
}

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      option: 0,
    }
  }
  
  render() {
    return (
      <Container class="App" maxWidth="false" style={{backgroundColor: '#5f7799', minHeight: '100vh', maxHeight: '100vh', position: 'relative'}}>
        {this.state.option==0 ? (
          <Menu onClick={() => this.setState()} click={false}/>
          )
        :
        (
          <Anime autoplay={true} translateX={[0, '-35vw']} duration={5000}>
            <Menu onClick={() => this.setState()} click={true}/>
          </Anime>
        )}
      </Container>
    );
  }
}

export default App;
