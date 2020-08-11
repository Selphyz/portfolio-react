import React from 'react';

import Particles from 'react-particles-js';
import { makeStyles } from '@material-ui/core';
import { Navbar, Body } from '.';
const useStyles = makeStyles({
  particlesCanvas: {
    position: 'absolute',
  },
});
const Home = () => {
  const classes = useStyles();
  return (
    <div>
      <Navbar />
      <Body />
      <Particles
        canvasClassName={classes.particlesCanvas}
        params={{
          particles: {
            number: {
              value: 45,
            },
          },
        }}
      />
    </div>
  );
};

export default Home;
