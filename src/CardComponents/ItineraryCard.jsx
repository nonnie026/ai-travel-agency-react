/* eslint-disable no-nested-ternary */
import React, { useState } from 'react';
import { Card, CardContent, Typography, Button, Box, Link } from '@material-ui/core';
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

export const ItineraryCard = ({ schedule, variable }) => {
  const classes = useStyles();
  const [colors, setColors] = useState(Array(schedule.length).fill('#3f51b5'));

  const handleClick = (index) => {
    setColors(colors.map((color, i) => (i === index ? (color === '#3f51b5' ? 'green' : '#3f51b5') : color)));
  };

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
          <Link href="#" color="primary">
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
            <Button
              style={{ backgroundColor: item.price === variable ? '' : colors[index], color: 'white' }}
              variant="contained"
              onClick={() => handleClick(index)}
              disabled={item.price === variable}
            >
              {`${colors[index] === '#3f51b5' ? 'Reserve' : 'Reserved'}`}
            </Button>
          </Box>
        </CardContent>
      ))}
    </Card>
  );
};
