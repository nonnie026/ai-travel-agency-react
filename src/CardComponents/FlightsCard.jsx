import React from 'react';
import { Card, CardContent, Typography, Avatar, Box, Divider, Button, Tooltip } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  tooltip: {
    fontSize: '1.2rem',
    color: 'white',
    backgroundColor: '#EB4D2A',
  },
  card: {
    margin: theme.spacing(2),
    padding: theme.spacing(2),
  },
  avatar: {
    marginRight: theme.spacing(1),
  },
  flex: {
    display: 'flex',
    alignItems: 'center',
  },
  details: {
    marginBottom: theme.spacing(1),
    display: 'flex',
    justifyContent: 'space-between',
  },
}));

export const FlightCard = ({ flight }) => {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardContent>
        <Box className={classes.flex} style={{ marginBottom: '1.2rem' }}>
          <Avatar src={flight.airline.logo} className={classes.avatar} />
          <Typography variant="h6">{flight.airline.name}</Typography>
        </Box>
        <Box className={classes.details}>
          <Typography>Origin</Typography>
          <Typography>{flight.origin}</Typography>
        </Box>
        <Box className={classes.details}>
          <Typography>Destination</Typography>
          <Typography>{flight.destination}</Typography>
        </Box>
        <Box className={classes.details}>
          <Typography>Departure</Typography>
          <Typography>{new Date(flight.departure_time).toLocaleString()}</Typography>
        </Box>
        <Box className={classes.details}>
          <Typography>Arrival</Typography>
          <Typography>{new Date(flight.arrival_time).toLocaleString()}</Typography>
        </Box>
        <Box className={classes.details}>
          <Typography>Duration</Typography>
          <Typography>{flight.duration}</Typography>
        </Box>
        <Box className={classes.details}>
          <Typography>Stopovers</Typography>
          <Typography>{flight.stopovers}</Typography>
        </Box>
        <Box className={classes.details}>
          <Typography>Layover cities</Typography>
          <Typography>{flight.layover_cities.join(', ')}</Typography>
        </Box>
        <Divider />
        <Box
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            marginTop: '1rem',
            marginBottom: '1rem',
            alignItems: 'center',
          }}
        >
          <Typography>Economy:</Typography>
          <Typography>
            {flight.economy.currency} {flight.economy.price}
          </Typography>
          <Tooltip
            classes={{ tooltip: classes.tooltip }}
            title={
              'When this button is clicked the user will be redirected to relevant booking platform so they can book their flights'
            }
          >
            <Button className={classes.button} color="primary" variant="contained">
              Reserve
            </Button>
          </Tooltip>
        </Box>
        <Divider />
        <Box
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            marginTop: '1rem',
            alignItems: 'center',
          }}
        >
          <Typography>Business:</Typography>
          <Typography>
            {flight.business.currency} {flight.business.price}
          </Typography>
          <Button className={classes.button} color="primary" variant="contained">
            Reserve
          </Button>
        </Box>
        <Box
          style={{
            display: 'flex',
            justifyContent: 'center',
            marginTop: '1.2rem',
            alignItems: 'center',
          }}
        >
          <Typography style={{ color: 'green' }} variant="caption">{`Cheapest with ${flight.provider}`}</Typography>
        </Box>
      </CardContent>
    </Card>
  );
};
