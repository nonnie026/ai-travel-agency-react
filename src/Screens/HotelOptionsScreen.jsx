import React from 'react';
import { Grid, Typography, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import LeftArrowIcon from '@material-ui/icons/ArrowBackIos';
import RightArrowIcon from '@material-ui/icons/ArrowForwardIos';
import { HotelCard } from '../CardComponents/HotelCard';
import { hotels } from '../utilities/hotels';

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

export const HotelOptionsScreen = ({ handleHotelOptions }) => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <Box style={{ display: 'flex', justifyContent: 'space-between', width: '100%', alignItems: 'center' }}>
        <LeftArrowIcon style={{ cursor: 'pointer' }} />
        <Typography variant="h4" component="h2" className={classes.heading}>
          Our Featured Hotels
        </Typography>
        <RightArrowIcon onClick={handleHotelOptions} style={{ cursor: 'pointer' }} />
      </Box>
      <Grid container spacing={3} justifyContent="center" direction="row">
        {hotels.map((hotel, index) => (
          <Grid xs={4} item key={index}>
            <HotelCard hotel={hotel} onButtonClick={handleHotelOptions} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};
