import React from 'react';
import { Card, CardContent, CardMedia, Typography, Button, Box, Grid, Tooltip, Divider } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Rating } from '@material-ui/lab';

const useStyles = makeStyles((theme) => ({
  tooltip: {
    fontSize: '1.2rem',
    color: 'white',
    backgroundColor: '#EB4D2A',
  },
  card: {
    padding: theme.spacing(1),
    width: '100%',
    boxShadow: '0px 3px 6px rgba(0, 0, 0, 0.16)',
    backgroundColor: '#fff',
    border: '1px solid rgba(0, 0, 0, 0.12)',
    minHeight: '80vh', // Fixed height
    height: '100%', // Make sure height is 100%
    position: 'relative',
  },
  media: {
    width: '100%',
    minHeight: '40vh',
  },
  hotelName: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  summary: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    flex: 1, // Make sure summary takes up the remaining space
  },
  bookButton: {
    position: 'absolute', // Add absolute positioning
    bottom: theme.spacing(1), // Distance from the bottom of the card
    right: theme.spacing(1), // Distance from the right side of the card
  },
}));

export const HotelCard = ({ hotel }) => {
  const classes = useStyles();

  // const createSummary = () => {
  //   const { amenities, nearbyAttractions } = hotel;

  //   const amenitiesText = Object.keys(amenities)
  //     .filter((key) => amenities[key])
  //     .map((amenity) => amenity.charAt(0).toUpperCase() + amenity.slice(1))
  //     .join(', ');

  //   const nearbyAttractionsText = nearbyAttractions.slice(0, 2).join(', ');

  //   return `Experience ultimate luxury with ${amenitiesText} at your fingertips. Unwind by exploring nearby attractions like ${nearbyAttractionsText}, and more!`;
  // };

  return (
    <Card className={classes.card}>
      <Grid container direction="column">
        <Grid item xs={12}>
          <CardMedia className={classes.media} image={hotel.images[0]} title={hotel.name} />
        </Grid>
        <Grid item xs={12} className={classes.summary}>
          <CardContent>
            <Box display="flex" justifyContent="space-between" alignItems="center" marginBottom={2}>
              <Typography className={classes.hotelName}>{hotel.name}</Typography>
              <Box display="flex" direction="row">
                <Typography variant="h6">
                  {hotel.currency} {hotel.price} {`         `}
                  <Typography variant="caption" style={{ color: 'green' }}>
                    {`Cheapest with ${hotel.provider}`}
                  </Typography>
                </Typography>
              </Box>
            </Box>
            <Box marginBottom={1}>
              <Rating value={hotel.rating} precision={0.1} readOnly />
            </Box>
            <Typography variant="body1">{`PROS: ${hotel.pros}`}</Typography>
            <Divider style={{ margin: '1rem' }} />
            <Typography variant="body1">{`CONS: ${hotel.cons}`}</Typography>
            <Box marginTop={1}>
              <Typography variant="caption">{hotel.address}</Typography>
            </Box>
          </CardContent>
          <Box display="flex" justifyContent="flex-start" className={classes.bookButton}>
            <Tooltip
              classes={{ tooltip: classes.tooltip }}
              title={
                'When this button is clicked the user will be redirected to relevant booking platform so they can book their accommodation'
              }
            >
              <Button variant="contained" color="primary" style={{ marginLeft: '16px', marginRight: '16px' }}>
                Reserve
              </Button>
            </Tooltip>
          </Box>
        </Grid>
      </Grid>
    </Card>
  );
};
