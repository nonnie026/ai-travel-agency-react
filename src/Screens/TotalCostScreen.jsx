import React from 'react';
import { Card, CardContent, Typography, Button, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { costs } from '../utilities/costs'; // Assuming costs data is in the same directory

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    gap: theme.spacing(2),
    paddingRight: theme.spacing(12),
    paddingLeft: theme.spacing(12),
    paddingTop: theme.spacing(2),
    '&.MuiContainer-maxWidthLg': {
      maxWidth: 'none',
    },
  },
  card: {
    padding: theme.spacing(4),
    paddingTop: theme.spacing(2),
    width: '30rem',
    boxShadow: '0px 3px 6px rgba(0, 0, 0, 0.16)',
    backgroundColor: '#fff',
    border: '1px solid rgba(0, 0, 0, 0.12)',
    marginBottom: theme.spacing(2),
  },
  heading: {
    margin: theme.spacing(2, 0),
    color: 'rgb(89, 77, 77)',
    fontFamily: 'Inter, sans-serif',
    letterSpacing: '-0.175rem',
    fontSize: '2.625em',
    lineHeight: 1.125,
    fontWeight: 600,
    textAlign: 'center',
  },
  button: {
    backgroundColor: 'green',
    color: 'white',
  },
}));

export const TotalCostScreen = ({ bookTrip }) => {
  const classes = useStyles();

  const totalCost =
    costs.accomodation.amount +
    costs.transportation.amount +
    costs.carHire.amount +
    costs.flights.amount +
    costs.activities.reduce((acc, activity) => acc + activity.amount, 0);

  return (
    <div className={classes.container}>
      <Typography variant="h4" component="h2" className={classes.heading}>
        Total Costs
      </Typography>
      <Card className={classes.card}>
        <CardContent>
          <Typography variant="h6">Accomodation:</Typography>
          <Box style={{ display: 'flex', justifyContent: 'space-between' }}>
            <Typography variant="body1">{costs.accomodation.name}</Typography>
            <Typography variant="body1">${costs.accomodation.amount}</Typography>
          </Box>

          <Typography variant="h6">Transportation:</Typography>
          <Box style={{ display: 'flex', justifyContent: 'space-between' }}>
            <Typography variant="body1">{costs.transportation.name}</Typography>
            <Typography variant="body1">${costs.transportation.amount}</Typography>
          </Box>

          <Typography variant="h6">Car Hire:</Typography>
          <Box style={{ display: 'flex', justifyContent: 'space-between' }}>
            <Typography variant="body1">{costs.carHire.name}</Typography>
            <Typography variant="body1">${costs.carHire.amount}</Typography>
          </Box>

          <Typography variant="h6">Flights:</Typography>
          <Box style={{ display: 'flex', justifyContent: 'space-between' }}>
            <Typography variant="body1">{costs.flights.name}</Typography>
            <Typography variant="body1">${costs.flights.amount}</Typography>
          </Box>

          <Typography variant="h6">Activities:</Typography>
          {costs.activities.map((activity, index) => (
            <Box key={index} style={{ display: 'flex', justifyContent: 'space-between' }}>
              <Typography variant="body1">{activity.name}</Typography>
              <Typography variant="body1">${activity.amount}</Typography>
            </Box>
          ))}

          <Typography variant="h6">Restaurant Reservations:</Typography>
          {costs.restuarantsReservations.map((reservation, index) => (
            <Box key={index} style={{ display: 'flex', justifyContent: 'space-between' }}>
              <Typography key={index} variant="body1">
                {reservation.name} - Payment on arrival
              </Typography>
              <Typography variant="body1">${reservation.reservationFee}</Typography>
            </Box>
          ))}
          <Box style={{ display: 'flex', justifyContent: 'space-between' }}>
            <Typography variant="h5">Total Cost</Typography>
            <Typography variant="h5">${totalCost}</Typography>
          </Box>

          <Box marginTop={2} style={{ display: 'flex', justifyContent: 'center', marginTop: '2rem' }}>
            <Button className={classes.button} onClick={bookTrip} variant="contained">
              Pay
            </Button>
          </Box>
        </CardContent>
      </Card>
    </div>
  );
};
