import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { FlightCard } from '../CardComponents/FlightsCard';
import { flights } from '../utilities/flights'; // assuming flights data is exported from 'flights.js'

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    gap: theme.spacing(2),
    paddingRight: theme.spacing(12),
    paddingLeft: theme.spacing(12),
    paddingTop: theme.spacing(4),
    '&.MuiContainer-maxWidthLg': {
      maxWidth: 'none',
    },
  },
  heading: {
    margin: theme.spacing(4, 0),
    color: 'rgb(89, 77, 77)',
    fontFamily: 'Inter, sans-serif',
    letterSpacing: '-0.175rem',
    fontSize: '2.625em',
    lineHeight: 1.125,
    fontWeight: 600,
    textAlign: 'center',
  },
}));

export const FlightOptionsScreen = ({ handleFlightOptions }) => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <Typography variant="h4" component="h2" className={classes.heading}>
        Our Featured Hotels
      </Typography>
      <Grid container spacing={2}>
        {flights.map((flight, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <FlightCard flight={flight} onButtonClick={handleFlightOptions} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};
