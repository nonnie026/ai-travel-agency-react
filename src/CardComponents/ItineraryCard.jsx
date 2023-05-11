/* eslint-disable no-nested-ternary */
import React from 'react';
import { Card, CardContent, Typography, Box, Link } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';

const useStyles = makeStyles((theme) => ({
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
              <EditIcon style={{ marginRight: '4px' }} />
              <DeleteIcon style={{ color: 'red' }} />
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
