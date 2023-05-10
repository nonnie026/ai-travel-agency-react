/* eslint-disable no-unused-vars */
/* eslint-disable no-return-assign */
/* eslint-disable no-param-reassign */

import React from 'react';
import { Formik, Form, Field } from 'formik';
import { TextField, Button, Container, FormControl, Grid, Card } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { airports } from '../utilities/formatAirportData'; // Replace with the airport data file

const useStyles = makeStyles((theme) => ({
  formContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100vw',
    height: '100vh',
    padding: theme.spacing(2),
    backgroundImage:
      'radial-gradient(circle at 50% 50%, #FFB545 2%, #EB4D2A 100%), repeating-linear-gradient(0deg, #FFFFFF 0, #FFFFFF 1px, transparent 1px, transparent 4px)',
    '&.MuiContainer-maxWidthLg': {
      maxWidth: 'none',
    },
  },
  card: {
    backgroundColor: 'white',
    width: '30rem',
    padding: theme.spacing(4),
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08)',
    borderRadius: '1.2rem',
  },
  formControl: {
    marginBottom: theme.spacing(2),
  },
  heading: {
    color: 'rgb(89, 77, 77)',
    fontFamily: 'Inter, sans-serif',
    letterSpacing: '-0.175rem',
    fontSize: '2.625em',
    lineHeight: 1.125,
    fontWeight: 600,
    textAlign: 'center',
    paddingBottom: theme.spacing(2),
  },
  button: {
    borderRadius: '1.5rem',
    backgroundImage: 'linear-gradient(to right, #FFB545, #EB4D2A)',
    fontWeight: 600,
    color: '#0F0F0F',
    transition: 'all 0.3s',
    '&:hover': {
      backgroundColor: 'rgba(255, 165, 0, 0.8)',
    },
  },
}));

export const FlightFormScreen = ({ handleFlightFormSubmit }) => {
  const classes = useStyles();

  return (
    <Container className={classes.formContainer}>
      <Card className={classes.card}>
        <h1 className={classes.heading}>Flight Details</h1>
        <Formik
          initialValues={{ from: '', to: '', departure: '', return: '', interests: [], travelers: 1 }}
          onSubmit={handleFlightFormSubmit}
        >
          {({ values }) => (
            <Form>
              <FormControl fullWidth className={classes.formControl}>
                <Autocomplete
                  id="from"
                  options={airports}
                  getOptionLabel={(option) => `${option.city}, ${option.country} (${option.IATA})`}
                  renderInput={(params) => <TextField {...params} label="From" />}
                />
              </FormControl>
              <FormControl fullWidth className={classes.formControl}>
                <Autocomplete
                  id="to"
                  options={airports}
                  getOptionLabel={(option) => `${option.city}, ${option.country} (${option.IATA})`}
                  renderInput={(params) => <TextField {...params} label="To" />}
                />
              </FormControl>
              <Grid container spacing={2} className={classes.formControl}>
                <Grid item xs={6}>
                  <Field
                    as={TextField}
                    fullWidth
                    id="departure"
                    name="departure"
                    label="Date of Departure/Check-in"
                    type="date"
                    InputLabelProps={{
                      shrink: true,
                    }}
                  />
                </Grid>
                <Grid item xs={6}>
                  <Field
                    as={TextField}
                    fullWidth
                    id="return"
                    name="return"
                    label="Date of Return/Checkout"
                    type="date"
                    InputLabelProps={{
                      shrink: true,
                    }}
                  />
                </Grid>
              </Grid>
              <Grid container spacing={2} className={classes.formControl}>
                {/* ... other Grid elements ... */}

                <Grid item xs={12}>
                  <Field
                    as={TextField}
                    fullWidth
                    id="travelers"
                    name="travelers"
                    label="Number of Travelers"
                    type="number"
                    InputLabelProps={{
                      shrink: true,
                    }}
                    inputProps={{
                      min: 1,
                      step: 1,
                    }}
                  />
                </Grid>
              </Grid>
              <Grid container alignItems="center" justifyContent="center" className={classes.formControl}>
                <Grid item xs={6}>
                  <Button type="submit" fullWidth className={classes.button}>
                    Next
                  </Button>
                </Grid>
              </Grid>
            </Form>
          )}
        </Formik>
      </Card>
    </Container>
  );
};
