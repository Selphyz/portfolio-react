import React from 'react';
import { Navbar } from '.';
import { Box, Grid, CardActionArea, CardMedia, CardContent, Typography, CardActions, Button, Card, makeStyles, Link } from '@material-ui/core';
import project1 from '../images/TypeScript.svg';
import project2 from '../images/Graphql.svg';
import project3 from '../images/React y Redux.svg';
import project4 from '../images/Mern Stack.svg';
const useStyles = makeStyles({
  mainContainer: {
    height: '100%',
  },
  cardContainer: {
    maxWidth: 345,
    margin: '5rem auto auto auto',
  },
});
const Portfolio = () => {
  const classes = useStyles();
  return (
    <Box component="div" className={classes.mainContainer}>
      <Navbar />
      <Grid container justify="center">
        <Grid item xs={12} sm={8} md={6}>
          <Card className={classes.cardContainer}>
            <CardActionArea>
              <CardMedia component="img" alt="Projecto1" height="140" image={project1}></CardMedia>
              <CardContent>
                <Typography gutterBottom variant="h5">
                  Proyecto Buscaminas
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Un proyecto que intenta reproducir fielmente el buscaminas de Windows XP. Realizado en Typescript, como la mayoria de mis proyectos
                  personales.
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" color="primary">
                  <Link href="https://github.com/Selphyz/buscaminas" target="_blank">
                    Código Fuente
                  </Link>
                </Button>
                <Button size="small" color="primary">
                  <Link href="https://buscaminastypescript.netlify.app/" target="_blank">
                    Demo
                  </Link>
                </Button>
              </CardActions>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item xs={12} sm={8} md={6}>
          <Card className={classes.cardContainer}>
            <CardActionArea>
              <CardMedia component="img" alt="Projecto2" height="140" image={project2}></CardMedia>
              <CardContent>
                <Typography gutterBottom variant="h5">
                  Proyecto API Graphql
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Es un proyecto de una API Graphql en Node, Typescript y con el ORM Typeorm, faltan algunos detalles que me gustaría añadir, asi que
                  no la he desplegado todavia.
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" color="primary">
                  <Link href="https://github.com/Selphyz/typegraphql-base" target="_blank">
                    Código Fuente
                  </Link>
                </Button>
              </CardActions>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item xs={12} sm={8} md={6}>
          <Card className={classes.cardContainer}>
            <CardActionArea>
              <CardMedia component="img" alt="Projecto1" height="140" image={project3}></CardMedia>
              <CardContent>
                <Typography gutterBottom variant="h5">
                  Tienda React y Redux
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Proyecto de tienda online con React, Redux para gestión del estado y flujo de datos en la aplicación, Redux Thunk para peticiones
                  asíncronas a una DB en Firebase y Strapi para la pasarela de pago.
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" color="primary">
                  <Link href="https://github.com/Selphyz/tienda-graphql-react/" target="_blank">
                    Código Fuente
                  </Link>
                </Button>
                <Button size="small" color="primary">
                  <Link href="https://tienda-react.netlify.app/" target="_blank">
                    Demo
                  </Link>
                </Button>
              </CardActions>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item xs={12} sm={8} md={6}>
          <Card className={classes.cardContainer}>
            <CardActionArea>
              <CardMedia component="img" alt="Projecto1" height="140" image={project4}></CardMedia>
              <CardContent>
                <Typography gutterBottom variant="h5">
                  Project 1
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id excepturi modi quia consequuntur ipsa corporis explicabo enim ipsum
                  fuga, voluptate corrupti mollitia et expedita deleniti dolores quas vero molestias eaque.
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" color="primary">
                  Compartir
                </Button>
                <Button size="small" color="primary">
                  Compartir
                </Button>
              </CardActions>
            </CardActionArea>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Portfolio;
