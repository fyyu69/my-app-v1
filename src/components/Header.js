import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {

  },
  title: {

  },
  button: {

  }
}));

export default function Header() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position='static'>
        <Toolbar>
          <Typography className={classes.title}>
            Patrick Yu
          </Typography>
          <Link to='/projects' color='secondary'>Projects</Link>
        </Toolbar>
      </AppBar>
    </div>
  )
}
