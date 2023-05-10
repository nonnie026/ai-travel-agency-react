/* eslint-disable no-return-assign */
/* eslint-disable no-param-reassign */
import React from 'react';
import { Formik, Form, Field } from 'formik';
import {
  TextField,
  Button,
  Container,
  FormControl,
  Grid,
  Card,
  Slider,
  InputAdornment,
  Typography,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Autocomplete from '@material-ui/lab/Autocomplete';

const useStyles = makeStyles((theme) => ({
  // ...reuse the useStyles from the previous component
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
  sliderRoot: {
    color: '#EB4D2A',
  },
  sliderThumb: {
    height: 20,
    width: 20,
    backgroundColor: '#fff',
    border: '2px solid currentColor',
    '&:focus, &:hover': {
      boxShadow: 'inherit',
    },
  },
  sliderTrack: {
    height: 4,
  },
  sliderRail: {
    height: 4,
    backgroundColor: '#d8d8d8',
  },
  sliderValueLabel: {
    top: -22,
    '& *': {
      background: 'transparent',
      color: '#000',
    },
  },
}));

const accommodationTypes = ['Hotel', 'Hostel', 'Bed & Breakfast', 'Apartment', 'Resort', 'Villa'];

const accommodationRatings = ['5 Star', '4 Star', '3 Star', '2 Star', '1 Star'];

export const AccommodationFormScreen = ({ handleAccommodationsFormSubmit, goBack }) => {
  const classes = useStyles();

  const handlePriceInputChange = (index, event, values, setFieldValue) => {
    const newPriceRange = [...values.priceRange];
    newPriceRange[index] = Number(event.target.value);
    setFieldValue('priceRange', newPriceRange);
  };

  return (
    <Container className={classes.formContainer}>
      <Card className={classes.card}>
        <h1 className={classes.heading}>Accommodation</h1>
        <Formik
          initialValues={{
            accommodationTypes: [],
            accommodationRatings: [],
            rooms: 1,
            priceRange: [0, 2000],
          }}
          onSubmit={(values) => handleAccommodationsFormSubmit(values)}
        >
          {({ values, setFieldValue }) => (
            <Form>
              <FormControl fullWidth className={classes.formControl}>
                <Autocomplete
                  multiple
                  id="accommodationTypes"
                  options={accommodationTypes}
                  getOptionLabel={(option) => option}
                  onChange={(event, value) => setFieldValue('accommodationTypes', value)}
                  renderInput={(params) => <TextField {...params} label="Accommodation Types (optional)" />}
                />
              </FormControl>
              <FormControl fullWidth className={classes.formControl}>
                <Autocomplete
                  multiple
                  id="accommodationRatings"
                  options={accommodationRatings}
                  getOptionLabel={(option) => option}
                  onChange={(event, value) => setFieldValue('accommodationRatings', value)}
                  renderInput={(params) => <TextField {...params} label="Accommodation Ratings (optional)" />}
                />
              </FormControl>
              <Grid container spacing={2} className={classes.formControl}>
                <Grid item xs={6}>
                  <Field
                    as={TextField}
                    fullWidth
                    id="rooms"
                    name="rooms"
                    label="Number of Rooms"
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
              <Grid container spacing={2} alignItems="center" className={classes.formControl}>
                <Grid item xs={12}>
                  <Typography id="price-range-slider" gutterBottom>
                    Price Range (USD)
                  </Typography>
                  <Slider
                    value={values.priceRange}
                    onChange={(event, newValue) => setFieldValue('priceRange', newValue)}
                    aria-labelledby="price-range-slider"
                    min={0}
                    max={2000}
                    classes={{
                      root: classes.sliderRoot,
                      thumb: classes.sliderThumb,
                      track: classes.sliderTrack,
                      rail: classes.sliderRail,
                    }}
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    label="Min Price"
                    value={values.priceRange[0]}
                    onChange={(event) => handlePriceInputChange(0, event, setFieldValue)}
                    InputProps={{
                      startAdornment: <InputAdornment position="start">USD</InputAdornment>,
                    }}
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    label="Max Price"
                    value={values.priceRange[1]}
                    onChange={(event) => handlePriceInputChange(1, event, setFieldValue)}
                    InputProps={{
                      startAdornment: <InputAdornment position="start">USD</InputAdornment>,
                    }}
                  />
                </Grid>
              </Grid>
              <Grid container spacing={2} className={classes.formControl}>
                <Grid item xs={6}>
                  <Button
                    fullWidth
                    className={classes.button}
                    style={{
                      backgroundColor: 'white',
                      backgroundImage: 'none',
                      border: '2px solid rgba(255, 165, 0, 0.8)',
                      color: 'rgba(255, 165, 0, 1)',
                    }}
                    onClick={goBack}
                  >
                    Back
                  </Button>
                </Grid>
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
