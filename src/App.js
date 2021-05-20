import './App.css';
import React from 'react';
import { makeStyles, createMuiTheme, responsiveFontSizes, ThemeProvider } from '@material-ui/core/styles';
import Anime from 'react-anime';

import {
  AppBar,
  Avatar,
  Button,
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Container,
  Drawer,
  Grid,
  Hidden,
  IconButton,
  Link,
  Toolbar,
  Typography
} from '@material-ui/core';

import logo from './assets/img/logo.png';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import MenuIcon from '@material-ui/icons/Menu';
import PersonIcon from '@material-ui/icons/Person';

import Brenden from './assets/img/brenden.jpg'
import gh39 from './assets/img/gh39.png';

let theme = createMuiTheme();
// theme = responsiveFontSizes(theme);

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  title: {
    flexGrow: 1,
  },
}));

function FullMenu(props) {

  const classes = useStyles();

  var op;

  if (props.click==true) {
    op = 1;
  }
  else {
    op = [0, 1];
  }

  return (
    <Container maxWidth="xl">
      <Grid container direction="column" justify="center" alignItems="center" style={{minHeight: '80vh'}}>
        <Grid container item xs={12} justify="center">
            <Anime easing="linear" duration={1000} delay={200} opacity={op}>
              <img src={logo} style={{width: "100%"}}/>
            </Anime>
        </Grid>
        <Grid container item xs={12} justify="center">
          <Toolbar>
            <Anime easing="linear" duration={1000} delay={600} opacity={op}>
              <Button onClick={() => props.setOption(1)} className={classes.menuButton}><Typography variant="h3"><Box letterSpacing='3px' color='white'>About</Box></Typography></Button>
            </Anime>
            <Anime easing="linear" duration={1000} delay={1000} opacity={op}>
              <Button onClick={() => props.setOption(2)} className={classes.menuButton}><Typography variant="h3"><Box letterSpacing='3px' color='white'>Contact</Box></Typography></Button>
            </Anime>
            <Anime easing="linear" duration={1000} delay={1400} opacity={op}>
              <Button onClick={() => props.setOption(3)} className={classes.menuButton}><Typography variant="h3"><Box letterSpacing='3px' color='white'>Projects</Box></Typography></Button>
            </Anime>
          </Toolbar>
        </Grid>
      </Grid>
    </Container>
  );
}

function About() {
  return (
    <Container maxWidth="false">
      <Grid container justify="center" spacing={2}>
        <Grid item xs={12}>
          <Typography variant="h2"><Box letterSpacing='3px' color='white'>ABOUT THE TEAM</Box></Typography>
        </Grid>
        <Grid item xs={12}>
          <Container style={{height: '25px'}}/>
        </Grid>

        {/* Brenden Smith */}
        <Hidden xsDown>
          <Grid item container sm={6} justify="center">
            <Avatar src={Brenden} style={{height: '250px', width: '250px'}}/>
          </Grid>
          <Grid item container sm={6} justify="center">
            <Avatar style={{height: '250px', width: '250px'}}><PersonIcon/></Avatar>
          </Grid>
          <Grid item xs={12}>
            <Container style={{height: '10px'}}/>
          </Grid>
          <Grid item container sm={6} justify="center">
          <Typography variant="h3"><Box letterSpacing='3px' color='white'>BRENDEN SMITH</Box></Typography>
          </Grid>
          <Grid item container sm={6} justify="center">
          <Typography variant="h3"><Box letterSpacing='3px' color='white'>LYDIA YANG</Box></Typography>
          </Grid>
          <Grid item xs={12}>
            <Container style={{height: '10px'}}/>
          </Grid>
          <Grid item container sm={6} justify="center">
            <Typography variant="body1"><Box color="white">Diligent and hardworking software engineer with programming, collaboration, and leadership experience. Motivated and enthusiastic about diving into the deeper concepts of the field and applying them in a practical way to change the world. Project-based experience in iOS and Android development, web development, and with various languages including but not limited to: Python, C++, and JavaScript. Continually aspiring to learn and grow in knowledge.</Box></Typography>
          </Grid>
          <Grid item container sm={6} justify="center">
            <Typography variant="body1"><Box color="white">Software engineer with multiple experiences to support the community. Willing to take any opportunities to improve her skills and knowledge that is applicable to the world. Project-based experience includes with mobile development, web development, and robotics. Several languages that she knows are Python, Java, and Dart.</Box></Typography>
          </Grid>
        </Hidden> 

        <Hidden smUp>
          <Grid item container justify="center">
            <Avatar src={Brenden} style={{height: '250px', width: '250px'}}/>
          </Grid>
          <Grid item container justify="center">
            <Typography variant="h3"><Box letterSpacing='3px' color='white'>BRENDEN SMITH</Box></Typography>
          </Grid>
          <Grid item container justify="center">
            <Typography variant="body1"><Box color="white">Diligent and hardworking software engineer with programming, collaboration, and leadership experience. Motivated and enthusiastic about diving into the deeper concepts of the field and applying them in a practical way to change the world. Project-based experience in iOS and Android development, web development, and with various languages including but not limited to: Python, C++, and JavaScript. Continually aspiring to learn and grow in knowledge.</Box></Typography>
          </Grid>
          <Grid item>
            <Container style={{height: '25px'}}/>
          </Grid>
          <Grid item container justify="center">
            <Avatar style={{height: '250px', width: '250px'}}><PersonIcon/></Avatar>
          </Grid>
          <Grid item>
            <Container style={{height: '10px'}}/>
          </Grid>
          
          <Grid item container justify="center">
            <Typography variant="h3"><Box letterSpacing='3px' color='white'>LYDIA YANG</Box></Typography>
          </Grid>
          <Grid item xs={12}>
            <Container style={{height: '10px'}}/>
          </Grid>
          <Grid item container justify="center">
            <Typography variant="body1"><Box color="white">Software engineer with multiple experiences to support the community. Willing to take any opportunities to improve her skills and knowledge that is applicable to the world. Project-based experience includes with mobile development, web development, and robotics. Several languages that she knows are Python, Java, and Dart.</Box></Typography>
          </Grid>
        </Hidden>
      </Grid>
    </Container>
  );
}

function Contact() {
  return (
    <Container maxWidth="false">
      <Grid container justify="center" spacing={2}>
        <Grid item xs={12}>
          <Typography variant="h2"><Box letterSpacing='3px' color='white'>CONTACT US</Box></Typography>
        </Grid>
        <Grid item xs={12}>
          <IconButton><MailOutlineIcon style={{color: 'white'}} fontSize="large"/></IconButton>
          <IconButton><LinkedInIcon style={{color: 'white'}} fontSize="large"/></IconButton>
        </Grid>
      </Grid>
    </Container>
  );
}

class Project {
  constructor(name, link, thumbnail) {
    this.name = name;
    this.link = link;
    this.thumbnail = thumbnail;
  }
}

function ProjectCard(props) {
  return (
    <Card style={{maxWidth: 345}}>
      <CardActionArea>
        <a href={props.project.link} target="_blank" rel="noopener noreferrer">
          <CardMedia image={props.project.thumbnail} style={{height: 140}}/>
          <CardContent>
            <Typography variant="h3"><Box letterSpacing='3px' color='black'>{props.project.name}</Box></Typography>
          </CardContent>
        </a>
      </CardActionArea>
    </Card>
  )
}

function Projects() {

  const pList = {
    GrangeHall39 : new Project(
      "GRANGE HALL 39",
      "https://tyde-software.github.io/GrangeHall39",
      gh39,
    ),
  }

  return (
    <Container maxWidth="xl">
      <Grid container justify="center" spacing={2}>
        <Grid item xs={12}>
        <Typography variant="h2"><Box letterSpacing='3px' color='white'>OUR PROJECTS</Box></Typography>
        </Grid>
        <Grid item xs={12}>
          <Container style={{height: '25px'}}/>
        </Grid>
        <Grid item lg={4}/>
        <Grid item md={6} lg={4}>
          <ProjectCard project={pList.GrangeHall39}/>
        </Grid>
        <Grid item lg={4}/>
      </Grid>
    </Container>
  );
}

function Content(props) {

  var op;
  var output; 

  if (props.direction=="in") {
    op = [0,1];
  }
  if (props.direction=="out") {
    op = [1,0]
  }

  if (props.option == 1) {
    output = <About/>;
  }
  else if (props.option == 2) {
    output = <Contact/>
  }
  else if (props.option == 3) {
    output = <Projects/>
  }
  else {
    output = <Container>NULL</Container>;
  }

  return (
    <Anime easing="linear" duration={1000} opacity={op} complete={props.complete}>
      {output}
    </Anime>
  )
}

function MobileMenu() {

  return (
    <AppBar elevation={0} style={{backgroundColor: '#5f7799'}}>
      <Toolbar style={{justifyContent: 'space-between'}}>
        <IconButton edge="start" color="inherit" aria-label="menu">
          <MenuIcon style={{color: 'white'}}/>
        </IconButton>
        <Typography variant="h3">
          Tyde Software
        </Typography>
        <IconButton disabled={true}/>
      </Toolbar>
    </AppBar>
  );
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.selectOption = this.selectOption.bind(this);
    this.finishRendering = this.finishRendering.bind(this);
    this.state = {
      prev: 0,
      option: 0,
      click: true,
      rendering: false,
    }
  }

  selectOption(param) {
    this.setState((prevState) => ({prev: prevState.option, option: param, click: true, rendering: true}));
  }

  finishRendering() {
    this.setState({rendering: false});
  }
  
  render() {
    return (
      <ThemeProvider theme={theme}>
        <Container class="App" maxWidth="false" style={{backgroundColor: '#5f7799', minHeight: '100vh', position: 'relative'}}>

          {/* Desktop */}
          
          <Hidden smDown>
            {this.state.option==0 ? (
              <Grid container>
                <Grid item md={4}/>
                <Grid item md={4}>
                  <FullMenu setOption={this.selectOption} click={false}/>
                </Grid>
                <Grid item md={4}/>
              </Grid>
              )
            :
            (
              <Grid container>
                <Grid item md={4}>
                  <Anime autoplay={true} translateX={['35vw', 0]} duration={5000}>
                    <FullMenu setOption={this.selectOption} click={true}/>
                  </Anime>
                </Grid>
                <Grid item md={1}/>
                <Grid item md={6} style={{height: '100vh'}}>
                  <Grid container align="center" justify="center" direction="column" style={{height: '100vh'}}>
                    <Grid item>
                      {this.state.prev==0 ? (
                        <Content option={this.state.option} direction="in" complete={null}/>
                      ) : (
                        <>{this.state.rendering==true ? (
                          <Content option={this.state.prev} direction="out" complete={this.finishRendering}/>
                        ) : (
                          <Content option={this.state.option} direction="in" complete={null}/>
                        )} </>
                      )}
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item md={1}/>
              </Grid>
            )}
          </Hidden> 

          {/* Mobile */}

          <Hidden mdUp>
            <MobileMenu/>
            <Container style={{height: 80}}/>
            <a id="about"/>
            <About/>
            <Container style={{height: 150}}/>
            <a id="projects"/>
            <Projects/>
            <Container style={{height: 150}}/>
            <a id="contact"/>
            <Contact/>
            <Container style={{height: 150}}/>
          </Hidden>
        </Container>
      </ThemeProvider>
    );
  }
}

export default App;
