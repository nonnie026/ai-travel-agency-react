/* eslint-disable no-return-assign */
/* eslint-disable no-param-reassign */
import React from 'react';
import { Formik, Form, Field } from 'formik';
import {
  TextField,
  Button,
  Container,
  FormControl,
  FormLabel,
  FormControlLabel,
  Grid,
  Card,
  // Typography,
  Checkbox,
  RadioGroup,
  Radio,
  // InputLabel,
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
  labelTop: {
    alignItems: 'flex-start',
  },
}));

const interests = ['History', 'Culture', 'Adventure', 'Nature', 'Food & Drink', 'Shopping', 'Sports'];
const dietaryPreferences = ['Vegetarian', 'Vegan', 'Gluten-free', 'Kosher', 'Halal', 'No restrictions'];
const languages = ['English', 'Spanish', 'French', 'German', 'Italian', 'Mandarin', 'Japanese'];

export const FoodInterestsActivitiesFormScreen = ({ handleSubmit, goBack }) => {
  const classes = useStyles();

  return (
    <Container className={classes.formContainer}>
      <Card className={classes.card}>
        <h1 className={classes.heading}>Interests & Activities</h1>
        <Formik
          initialValues={{
            budget: 0,
            firstTime: false,
            interests: [],
            dietaryPreferences: [],
            tourGuide: false,
            tourGuideLanguage: '',
            transportation: '',
          }}
          onSubmit={handleSubmit}
        >
          {({ values, setFieldValue }) => (
            <Form>
              <FormControl fullWidth className={classes.formControl}>
                <Field
                  as={TextField}
                  fullWidth
                  id="budget"
                  name="budget"
                  label="Total Budget (incl. flights & accommodation)"
                  type="number"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  inputProps={{
                    min: 0,
                    step: 1,
                  }}
                />
              </FormControl>
              <FormControl fullWidth className={classes.formControl}>
                <FormControlLabel
                  control={
                    <Checkbox color="primary" onChange={(event) => setFieldValue('firstTime', event.target.checked)} />
                  }
                  label="Is this your first time traveling to Tokyo?"
                />
              </FormControl>
              <FormControl fullWidth className={classes.formControl}>
                <Autocomplete
                  multiple
                  id="interests"
                  options={interests}
                  getOptionLabel={(option) => option}
                  onChange={(event, value) => (values.interests = value)}
                  freeSolo
                  renderInput={(params) => <TextField {...params} label="Interests" />}
                />
              </FormControl>
              <FormControl fullWidth className={classes.formControl}>
                <Autocomplete
                  multiple
                  id="dietaryPreferences"
                  options={dietaryPreferences}
                  getOptionLabel={(option) => option}
                  onChange={(event, value) => (values.dietaryPreferences = value)}
                  renderInput={(params) => <TextField {...params} label="Dietary Preferences" />}
                />
              </FormControl>
              <FormControl fullWidth className={classes.formControl}>
                <FormControlLabel
                  control={
                    <Checkbox color="primary" onChange={(event) => setFieldValue('tourGuide', event.target.checked)} />
                  }
                  label="Would you like a personal tour guide?"
                />
              </FormControl>
              {values.tourGuide && (
                <FormControl fullWidth className={classes.formControl}>
                  <Autocomplete
                    id="tourGuideLanguage"
                    options={languages}
                    getOptionLabel={(option) => option}
                    value={values.tourGuideLanguage || null}
                    onChange={(event, value) => setFieldValue('tourGuideLanguage', value)}
                    renderInput={(params) => <TextField {...params} label="Tour Guide Language" />}
                  />
                </FormControl>
              )}
              <FormControl fullWidth className={classes.formControl}>
                {/* <InputLabel id="transportation-label">Preferred Transportation</InputLabel> */}
                <FormLabel component="legend">Preferred Transportation</FormLabel>
                <RadioGroup
                  aria-labelledby="transportation-label"
                  name="transportation"
                  value={values.transportation}
                  onChange={(event) => setFieldValue('transportation', event.target.value)}
                  row // Add this prop to make RadioGroup items display in a row
                >
                  <Grid container alignItems="center">
                    <Grid item xs={6}>
                      <FormControlLabel
                        value="carServices"
                        control={<Radio color="primary" />}
                        label="Car services (Driver or rental)"
                      />
                    </Grid>
                    <Grid item xs={6}>
                      <FormControlLabel
                        value="taxiUberWalk"
                        control={<Radio color="primary" />}
                        label="Taxi, Uber, or walk (up to 30 minutes)"
                      />
                    </Grid>
                  </Grid>
                </RadioGroup>
              </FormControl>
              {/* Add more fields if necessary */}
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
                    Create Itinerary
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
