/* eslint-disable no-nested-ternary */
import React from 'react';
import { Card, CardContent, Typography, Box, Link, Tooltip } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import ChatIcon from '@material-ui/icons/Chat';

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
    marginBottom: theme.spacing(2),
  },
  activity: {
    marginBottom: theme.spacing(2),
  },
}));

export const ItineraryCard = ({ schedule }) => {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      {schedule.map((item, index) => (
        <CardContent key={index}>
          <Typography variant="h5">{item.day}</Typography>
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            marginTop={2}
            style={{ display: 'flex', justifyContent: 'space-between', marginTop: '1rem' }}
          >
            <Typography variant="h6">{item.time}</Typography>
            <Box style={{ cursor: 'pointer' }}>
              <Tooltip
                classes={{ tooltip: classes.tooltip }}
                title="This button will allow users to give text based instructions to change the itinerary. This includes the time as well as the place. Once edited, the itinerary we be reconstructed with the users changes in place"
              >
                <ChatIcon color="primary" style={{ marginRight: '4px' }} />
              </Tooltip>
              <Tooltip
                classes={{ tooltip: classes.tooltip }}
                title="This button will allow users to edit the specific item on their itinerary. This includes the time as well as the place. Once edited, the itinerary we be reconstructed with the users changes in place"
              >
                <EditIcon style={{ marginRight: '4px' }} />
              </Tooltip>
              <Tooltip
                classes={{ tooltip: classes.tooltip }}
                title="The delete button will remove the itinerary item from the schedule. This will create a gap that the user can choose to either fill or leave blank"
              >
                <DeleteIcon style={{ color: 'red' }} />
              </Tooltip>
            </Box>
          </Box>
          <Typography variant="body1" className={classes.activity}>
            {item.activity}
          </Typography>
          <Link href="#" variant="body2" color="primary">
            {item.address}
          </Link>
          <Box
            display="flex"
            justifyContent="space-between"
            flexDirection={'row'}
            alignItems="center"
            marginTop={2}
            style={{ display: 'flex', justifyContent: 'space-between', marginTop: '1rem' }}
          >
            <Typography variant="h6">{item.price}</Typography>
          </Box>
        </CardContent>
      ))}
    </Card>
  );
};
