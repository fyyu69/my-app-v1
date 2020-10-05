import React from 'react';
import { 
  AppBar, 
  Grid, 
  Toolbar, 
  Typography
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Link, useRouteMatch } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  title: {
    fontSize: '28px',
    fontWeight: 700
  },
  navlist: {
    listStyle: 'none'
  },
  navlistItem: {
    marginRight: theme.spacing(4)
  },
  navlink: {
    color: theme.palette.common.white,
    fontSize: '18px',
    textDecoration: 'none',
    '&:hover': {
      textDecoration: 'underline'
    },
    '&.active': {
      color: '#ffb74d',
      fontWeight: 700
    }
  }
}));

function NavLink({ label, to, activeOnlyWhenExact, classNames }) {
  let match = useRouteMatch({
    path: to,
    exact: activeOnlyWhenExact
  });

  return (
    <div>
      <Link to={to} className={`${classNames} ${match ? 'active' : ''}`}>{label}</Link>
    </div>
  )
}

export default function Header() {
  const classes = useStyles();

  return (
    <AppBar position='static'>
      <Toolbar>
        <Grid
          container
          justify="flex-start"
          alignItems="center">
          <Grid item xs={4}>
            <Typography variant='h1' className={classes.title}>
              Patrick Yu
            </Typography>
          </Grid>
          <Grid item xs={8}>
            <Grid 
              container
              justify="flex-end"
              alignItems="center"
              component='ul'
              className={classes.navlist}>
              <Grid item component='li' className={classes.navlistItem}>
                <NavLink label='Home' to='/' activeOnlyWhenExact={true} classNames={classes.navlink}/>
              </Grid>
              <Grid item component='li' className={classes.navlistItem}>
                <NavLink label='Projects' to='/projects' activeOnlyWhenExact={false} classNames={classes.navlink}/>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  )
}
