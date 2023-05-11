import React from 'react';
import { Container, Typography, Button, Card, CardContent } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  container: {
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
    width: '20rem',
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

export const TripBookedScreen = () => {
  const classes = useStyles();

  return (
    <Container className={classes.container}>
      <Typography variant="h4" className={classes.heading} style={{ marginBottom: '20px' }}>
        Trip Booked
      </Typography>
      <Card style={{ marginBottom: '15px' }}>
        <CardContent>
          <Typography variant="body1">
            Thank you for making your booking. We have sent the final itinerary to your email: email@gmail.com
          </Typography>
        </CardContent>
      </Card>
      <Button variant="contained" color="primary">
        Add itinerary to Calendar
      </Button>
    </Container>
  );
};
