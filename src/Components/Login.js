import React from 'react';


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


function Login(props) {

  const classes = useStyles();
  const history = useHistory();


  const login = () => {

      history.push("/payment");

  }

  return (
    <>
      <p>
        Swear jar.<Link component={RouterLink} to="/login">
          With prop forwarding
        </Link>
        <br/>
        <TextField label="Email" defaultValue="email"/>
        <br/>
        <TextField label="Password" defaultValue="password"/>
        <br/>
        <Link component={RouterLink} to="/signup">
          Signup
        </Link>
        <Button value="onclick" onClick={login}>onclick</Button>
        <Link component={Button} to="/login">
          Login
        </Link>
      </p>    
      </>
  );
}

export default Login;
