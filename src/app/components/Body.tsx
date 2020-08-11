import React from 'react';
import { Typography, Avatar, Grid, Box, makeStyles, Theme } from '@material-ui/core';
import Typed from 'react-typed';
import avatar from '../images/myAvatar.svg';
import '../styles/style.css';

const useStyles = makeStyles((theme: Theme) => ({
  avatar: {
    width: theme.spacing(15),
    height: theme.spacing(15),
    margin: theme.spacing(1),
  },
  title: {
    color: 'tomato',
  },
  subtitle: {
    color: 'tan',
    marginBottom: '3rem',
  },
  typedContainer: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '100vw',
    textAlign: 'center',
    zIndex: 1,
  },
}));
const Header = () => {
  const classes = useStyles();
  return (
    <Box className={classes.typedContainer}>
      <Grid container justify="center">
        <Avatar className={classes.avatar} src={avatar} alt="Carlos"></Avatar>
      </Grid>
      <Typography className={classes.title} variant="h4">
        <Typed strings={['Carlos']} typeSpeed={40} />
      </Typography>
      <br />
      <Typography className={classes.subtitle} variant="h5">
        <Typed strings={['Desarrollo Web', 'Diseño Web', 'FullStack']} typeSpeed={80} backSpeed={60} backDelay={500} loop />
      </Typography>
    </Box>
  );
};

export default Header;
