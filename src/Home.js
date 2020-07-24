import React from 'react';
import AppBar from '@material-ui/core/AppBar';
// import Toolbar from '@material-ui/core/Toolbar';
// import IconButton from '@material-ui/core/IconButton';
// import Typography from '@material-ui/core/Typography';
// import InputBase from '@material-ui/core/InputBase';
import { fade, makeStyles } from '@material-ui/core/styles';
//import MenuIcon from '@material-ui/icons/Menu';
// import SearchIcon from '@material-ui/icons/Search';

import "./styles.css"
import TextField from '@material-ui/core/TextField';
import Search from "./Searchbar.js";
import StyledCheckbox from "./checkbox.js"
// import Search from "./Searchresult.js"
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    // flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(50),
    marginRight: theme.spacing(1),
    width: '100ch',
  },
}));


export default function LayoutextFields() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className="centersearch">
      <Search />
      </div>
      <div className="centercheck">
      <StyledCheckbox />
      </div>
      <div className="header">
        <div className="center">
          <h1>Compare Laundry Services</h1>
        </div>
      </div>
      
    </div>
  );
}

  
