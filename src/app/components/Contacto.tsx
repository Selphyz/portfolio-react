import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import { Box, Grid, Typography, TextField, Button } from '@material-ui/core';
import { MailOutline } from '@material-ui/icons';
import Navbar from './Navbar';

const useStyles = makeStyles(() => ({
  form: {
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    position: 'absolute',
  },
}));
const InputField = withStyles({
  root: {
    '& label.Mui-focused': {
      color: 'tomato',
    },
    '& label': {
      color: 'tan',
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: 'tan',
      },
      '&:hover fieldset': {
        borderColor: 'tan',
      },
    },
  },
})(TextField);

const Contacto = () => {
  const classes = useStyles();
  return (
    <Box component="div">
      <Navbar />
      <Grid container justify="center">
        <Box component="form" className={classes.form}>
          <Typography variant="h5" color="primary">
            Contáctame o contrátame
          </Typography>
          <InputField fullWidth={true} label="Name" variant="outlined" margin="dense" size="medium" inputProps={{ style: { color: 'white' } }} />
          <br />
          <InputField fullWidth={true} label="Email" variant="outlined" margin="dense" size="medium" inputProps={{ style: { color: 'white' } }} />
          <br />
          <InputField fullWidth={true} label="Compañía" variant="outlined" margin="dense" size="medium" inputProps={{ style: { color: 'white' } }} />
          <br />
          <InputField
            placeholder="Motivo de contacto"
            multiline={true}
            fullWidth={true}
            label="Mensaje"
            variant="outlined"
            margin="dense"
            size="medium"
            inputProps={{ style: { color: 'white' } }}
          />
          <Button variant="contained" color="primary" fullWidth={true} endIcon={<MailOutline />}>
            Contactar
          </Button>
        </Box>
      </Grid>
    </Box>
  );
};

export default Contacto;
