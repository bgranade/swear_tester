import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

import { useParams, useLocation, useHistory, useRouteMatch, Route, Link as RouterLink, Switch, BrowserRouter as Router } from "react-router-dom";
import { makeStyles, withStyles, MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Link from '@material-ui/core/Link';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';



import Login from "./Components/Login";


const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    height: 140,
    width: 100,
  },
  control: {
    padding: theme.spacing(2),
  },
}));


function App(props) {

  const classes = useStyles();
  const [donation, setDonate] = useState(0);
  const [charityChoice, setCharity] = useState("");
  const [charity_checked, setCharityChecked] = useState([]);
  const [charities, setCharities] = useState([{charity_id: 1, charity_name: "Red Cross", selected: false}, {charity_id: 2, charity_name: "Humane Society", selected: false}]);
  const [value, setValue] = React.useState(0);

  const login = () => {

      //history.push("/stripe");

  }

  const donate = () => {

    //alert(value);

    if((donation + 10) == 20){

      alert("$" + donation + ".00 has been donated to " + charities[value-1].charity_name);

    }

    setDonate(donation + 10);

  }

  const onCharityChange = (e) => {

    let temp_charities = [...charities];

    //alert(charities[e.target.value - 1].selected);
    temp_charities[e.target.value - 1].selected = true;
    //alert(charities[e.target.value - 1].selected);


    setCharities(temp_charities);
    setCharity(e.target.value);

  }

  const handleChange = (e) => {

      //alert(e.target.value);

      setValue(e.target.value);

  }

  return (
      <Router>
        <div className="App">
          <AppBar position="static" style={{ margin: 0, position: "fixed" }}>
            <Toolbar>
              <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                <MenuIcon />
              </IconButton>
              <Typography variant="h6" className={classes.title}>
                Swear Jar
              </Typography>
            </Toolbar>
          </AppBar>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <Grid container spacing={1}>
            <Grid item md={3} alignItems="flex-start" justify="">
              <Grid
                container
                spacing={0}
                direction="column"
                alignItems="flex-start"
                justify=""
                style={{ minHeight: '100vh', paddingLeft: "10vh" }}>
                <br/>
                <br/>
                <br/>
                <Link component={RouterLink} to="/login">
                  Login
                </Link>
                <br/>
                <Link component={RouterLink} to="/payment">
                  Payment Method
                </Link>
                <br/>
                <Link component={RouterLink} to="/charities">
                  Charities
                </Link>
                <br/>
                <Link component={RouterLink} to="/jar">
                  Swear Jar
                </Link>
              </Grid>
            </Grid>
            <Grid item md={9}>
              <Grid
                container
                spacing={0}
                direction="column"
                alignItems="flex-start"
                justify=""
                style={{ minHeight: '100vh', paddingLeft: "1vh" }}>
               <Switch>
                  <Route exact path="/">
                      <p>
                  
                        <Login/>
                      </p>    
                  </Route>
                  <Route exact path="/login">
                      <p>
                       Login
                      </p>    
                        Charity list
                        <br/>
                        Login
                        <br/>
                        Stripe
                  </Route>
                  <Route exact path="/payment">
                        <TextField label="Credit Card Number" defaultValue="Card Number"/>
                        <br/>
                        <TextField label="Expiry Date" defaultValue="Expiry Date"/>
                        <br/>
                        <br/>
                        <Button onClick={login}>Save</Button>
                  </Route>
                  <Route exact path="/charities">
                      <br/>
                      <FormControl component="fieldset" className={classes.formControl}>
                        <FormLabel component="legend">Organizations</FormLabel>
                        <RadioGroup aria-label="gender" name="organization" value={value} onChange={handleChange}>
                          {charities.map(charity => 
                            <FormControlLabel value={"" + charity.charity_id} control={<Radio />} label={charity.charity_name} />
                          )}
                        </RadioGroup>
                      </FormControl>
                  </Route>
                  <Route exact path="/jar">
                      <p>
                        <b>${donation}.00</b>
                        <br/>
                        <br/>
                        <br/>
                       <img src={process.env.PUBLIC_URL + "/jar.jpeg"} height="50%" width="50%"/>
                        <br/>
                        <Button onClick={donate}>$10.00</Button>
                      </p>
                      <br/>
                      add a right side grid for tip
                  </Route>                        
                </Switch>
              </Grid>
            </Grid>
          </Grid>
        </div>
      </Router>
  );
}

export default App;
