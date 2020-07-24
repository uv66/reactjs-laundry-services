import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import { fade, makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import {Component} from "react";
import axios from 'axios';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    padding: theme.spacing(1,1,1,2),
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '10%',
    [theme.breakpoints.up('xs')]: {
      marginLeft: theme.spacing(2),
      width:'120%',
    },
  },
  searchIcon: {
    padding: theme.spacing(0,0),
    height: '70%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 0, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(5)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '15ch',
      '&:focus': {
        width: '27ch',
      },
    },
  },
}));


class Search extends Component {
  token = null;
  state = {
    query: "",
    data: []
  };

  handleChange = event => {
    this.setState({ query: event.target.value });
  }
  handleSubmit = event => {
    event.preventDefault();
  const user = {
      query: this.state.query
    };


    axios.post(`https://jsonplaceholder.typicode.com/users`, { user })
    .then(res => {
      console.log(res);
      console.log(res.data);
    })
}

render() {
  return (
    <div>
      <form onSubmit={this.handleSubmit}>
        <label>
          Entry Post Code
          <input type="text" name="name" onChange={this.handleChange} />
        </label>
        <div className="container">
      <div className="centersearchbutton">
      <Button variant="contained" color="primary" href="#contained-buttons">
          Search
      </Button>
      </div>
      </div>
      </form>
    </div>
  )
}
}
export default Search;