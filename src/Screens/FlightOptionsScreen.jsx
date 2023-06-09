import React from 'react';
import { Grid, Typography, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import LeftArrowIcon from '@material-ui/icons/ArrowBackIos';
import RightArrowIcon from '@material-ui/icons/ArrowForwardIos';
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
  imageContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: theme.spacing(4),
  },
}));

export const FlightOptionsScreen = ({ handleFlightOptions }) => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <Box style={{ display: 'flex', justifyContent: 'space-between', width: '100%', alignItems: 'center' }}>
        <LeftArrowIcon style={{ cursor: 'pointer' }} />
        <Typography variant="h4" component="h2" className={classes.heading}>
          Our Featured Flights
        </Typography>
        <RightArrowIcon onClick={handleFlightOptions} style={{ cursor: 'pointer' }} />
      </Box>

      <Grid container spacing={2}>
        {flights.map((flight, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <FlightCard flight={flight} onButtonClick={handleFlightOptions} />
          </Grid>
        ))}
      </Grid>
      <Box className={classes.imageContainer}>
        <Typography variant="body1">Powered by -</Typography>
        <a href="https://your-link.com">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Skyscanner_Logo_LockupHorizontal_SkyBlue_RGB.svg/2880px-Skyscanner_Logo_LockupHorizontal_SkyBlue_RGB.svg.png?20200223151859"
            alt="Your alt text"
            style={{ width: '100px', marginLeft: '10px' }}
          />
        </a>
      </Box>
    </div>
  );
};
