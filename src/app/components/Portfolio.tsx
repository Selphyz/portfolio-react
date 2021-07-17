import React from 'react';
import { Navbar } from '.';
import { Box, Grid, CardActionArea, CardMedia, CardContent, Typography, CardActions, Button, Card, makeStyles, Link } from '@material-ui/core';
import project1 from '../images/TypeScript.svg';
import project2 from '../images/Graphql.svg';
import project3 from '../images/React y Redux.svg';
import project4 from '../images/Covid Graphs.svg';
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
                  Proyecto API Golang
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Es un proyecto fullstack de React y Typescript con una API REST programada con Golang.
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" color="primary">
                  <Link href="https://github.com/Selphyz/golang-fiber" target="_blank">
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
                  Visualizador cryptocurrencies
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Proyecto React con conexión a una API pública de datos de cryptomonedas para visualizar precio y volumen de comercio.
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" color="primary">
                  <Link href="https://github.com/Selphyz/criptoshow-react" target="_blank">
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
              <CardMedia component="img" alt="Projecto1" height="140" image={project4}></CardMedia>
              <CardContent>
                <Typography gutterBottom variant="h5">
                  Proyecto Gráficas Covid19
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Un proyecto de gráficas estadísticas sobre la pandemia del sars-coronavirus-2. Tiene gráfico histórico global y gráficas del país
                  seleccionado. Los datos solo son fiables como la API seleccionada y he tenido que adaptar parte del proyecto a los datos de esa API.
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" color="primary">
                  <Link href="https://github.com/Selphyz/material-ui-covid19" target="_blank">
                    Código Fuente
                  </Link>
                </Button>
                <Button size="small" color="primary">
                  <Link href="https://react-corona.netlify.app/" target="_blank">
                    Demo
                  </Link>
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
