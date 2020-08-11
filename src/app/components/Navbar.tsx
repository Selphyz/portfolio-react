import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  ListItem,
  IconButton,
  ListItemText,
  Avatar,
  Divider,
  List,
  Typography,
  Box,
  ListItemIcon,
  Drawer,
  makeStyles,
  Theme,
  Link as Hlink,
  Container,
} from '@material-ui/core';
import { ArrowBack, Home, Apps, AssignmentInd, LinkedIn, GitHub } from '@material-ui/icons';
import avatar from '../images/myAvatar.svg';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme: Theme) => ({
  wrapperContainer: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  socialNetwork: {
    marginLeft: '7px',
  },
  menuSliderContainer: {
    width: 250,
    background: '#511',
    height: '100%',
  },
  avatar: {
    display: 'block',
    margin: '0.5rem auto',
    height: theme.spacing(12),
    width: theme.spacing(12),
  },
  listItem: {
    color: 'tan',
  },
  header: {
    position: 'sticky',
    top: 0,
  },
}));
const menuItems = [
  {
    listIcon: <Home />,
    listText: 'Inicio',
    listPath: '/',
  },
  {
    listIcon: <AssignmentInd />,
    listText: 'Curriculum',
    listPath: '/curriculum',
  },
  {
    listIcon: <Apps />,
    listText: 'Portfolio',
    listPath: '/portfolio',
  },
  // {
  //   listIcon: <ContactMail />,
  //   listText: 'Contacto',
  //   listPath: '/contacto',
  // },
];
const Navbar = () => {
  const [state, setState] = useState({
    right: false,
  });
  const toggleSlider = (slider: string, open: boolean) => () => {
    setState({ ...state, [slider]: open });
  };
  const classes = useStyles();
  const sideList = (slider: string) => (
    <Box className={classes.menuSliderContainer} component="div" onClick={toggleSlider(slider, false)}>
      <Avatar className={classes.avatar} src={avatar} alt="Carlos" />
      <Divider />
      <List>
        {menuItems.map((item, key) => (
          <ListItem button key={key} component={Link} to={item.listPath}>
            <ListItemIcon className={classes.listItem}>{item.listIcon}</ListItemIcon>
            <ListItemText className={classes.listItem} primary={item.listText} />
          </ListItem>
        ))}
      </List>
    </Box>
  );
  return (
    <React.Fragment>
      <Box component="nav">
        <AppBar position="fixed" style={{ background: '#222' }}>
          <Toolbar>
            <IconButton onClick={toggleSlider('right', true)}>
              <ArrowBack style={{ color: 'tomato' }} />
            </IconButton>
            <Typography variant="h5" style={{ color: 'tan' }}>
              Portfolio
            </Typography>
            <Drawer anchor="right" open={state.right} onClose={toggleSlider('right', false)}>
              {sideList('right')}
            </Drawer>
            <Container className={classes.wrapperContainer}>
              <List>
                <Hlink href="https://www.linkedin.com/in/carlos-dominguez-puig-4378a9144/" target="_blank" rel="noopener noreferrer">
                  <LinkedIn className={classes.socialNetwork} />
                </Hlink>
                <Hlink href="https://github.com/Selphyz" target="_blank" rel="noopener noreferrer">
                  <GitHub className={classes.socialNetwork} />
                </Hlink>
              </List>
            </Container>
          </Toolbar>
        </AppBar>
      </Box>
    </React.Fragment>
  );
};

export default Navbar;
