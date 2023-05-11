import React from 'react';
import { Typography, Box, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { ItineraryCard } from '../CardComponents/ItineraryCard';
import { itinerary } from '../utilities/activities';

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

export const ItineraryScreen = ({ handleItineraryConfirmation }) => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <Box style={{ display: 'flex', justifyContent: 'space-between', width: '100%', height: 'auto' }}>
        <Typography variant="h4" component="h2" className={classes.heading}>
          Here's Your Itinerary
        </Typography>
        <Button variant="contained" color="primary" onClick={handleItineraryConfirmation}>
          Accept Itinerary
        </Button>
      </Box>
      <Box>
        {itinerary.map((day, index) => (
          <Box key={index} marginBottom={4}>
            <Typography variant="h4">Day {day.day}</Typography>
            <ItineraryCard schedule={day.activities} variable="Variable" />
          </Box>
        ))}
      </Box>
    </div>
  );
};
