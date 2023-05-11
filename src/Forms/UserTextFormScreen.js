/* eslint-disable no-unused-vars */
import React from 'react';
import { Formik, Form, Field } from 'formik';
import { TextField, Button, Container, FormControl, Card } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

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
}));

export const UserTextInputFormScreen = ({ handleSubmit, goBack }) => {
  const classes = useStyles();

  return (
    <Container className={classes.formContainer}>
      <Card className={classes.card}>
        <h1 className={classes.heading}>Your Trip Expectations</h1>
        <Formik
          initialValues={{
            tripExpectations: '',
          }}
          onSubmit={handleSubmit}
        >
          {({ values, setFieldValue }) => (
            <Form>
              <FormControl fullWidth className={classes.formControl}>
                <Field
                  as={TextField}
                  multiline
                  rows={4}
                  fullWidth
                  id="tripExpectations"
                  name="tripExpectations"
                  label="Describe your trip expectations"
                  placeholder="E.g., I want to explore the culture and history of Tokyo, especially the ancient temples and shrines. I'm also interested in experiencing local cuisine, specifically sushi and ramen. I'd love to take a cooking class if possible. Lastly, I want to see the cherry blossoms if they are in season during my visit."
                />
              </FormControl>
              <Button type="submit" fullWidth className={classes.button}>
                Submit
              </Button>
            </Form>
          )}
        </Formik>
      </Card>
    </Container>
  );
};
