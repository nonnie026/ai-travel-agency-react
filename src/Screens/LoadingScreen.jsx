/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import {
  makeStyles,
  // CircularProgress,
  Typography,
  // SvgIcon,
} from '@material-ui/core';
import AirplanemodeActiveIcon from '@material-ui/icons/AirplanemodeActive';

const useStyles = makeStyles((theme) => ({
  loadingScreen: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    backgroundImage:
      'radial-gradient(circle at 50% 50%, #FFB545 2%, #EB4D2A 100%), repeating-linear-gradient(0deg, #FFFFFF 0, #FFFFFF 1px, transparent 1px, transparent 4px)',
    '&.MuiContainer-maxWidthLg': {
      maxWidth: 'none',
    },
  },
  airplaneContainer: {
    position: 'relative',
    width: '16em',
    height: '1em',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: theme.spacing(4),
  },
  airplaneIcon: {
    position: 'absolute',
    // rotate: '$planeRotation 5s linear infinite',
    rotate: '45deg',
    width: '2em',
    height: '2em',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    animation: '$arcMovement 3s linear infinite',
  },
  '@keyframes arcMovement': {
    '0%': {
      transform: 'rotate(-225deg) translate(3em) rotate(225deg)',
    },
    '25%': {
      transform: 'rotate(-180deg) translate(3em) rotate(180deg)',
    },
    '50%': {
      transform: 'rotate(-135deg) translate(3em) rotate(135deg)',
    },
    '75%': {
      transform: 'rotate(-90deg) translate(3em) rotate(90deg)',
    },
    '100%': {
      transform: 'rotate(-45deg) translate(3em) rotate(45deg)',
    },
  },
  loadingText: {
    marginTop: theme.spacing(2),
    textAlign: 'center',
    fontSize: '1rem',
    color: 'white',
  },
}));

export const LoadingScreen = ({ handleLoadingDone }) => {
  const classes = useStyles();
  const [text, setText] = useState('Finding flights');
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    console.log('In useEffect');
    const textTimer = setInterval(() => {
      switch (text) {
        case 'Finding flights':
          setText('Finding accommodations perfect for your interests');
          break;
        case 'Finding accommodations perfect for your interests':
          setText('Curating your itinerary');
          break;
        case 'Curating your itinerary':
          setText('Finalising');
          break;
        case 'Finalising':
          setText('Done!');
          break;
        default:
          setText('Finding flights ...');
      }
    }, 750);
    return () => {
      clearInterval(textTimer);
    };
  }, [text]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCounter((prevCounter) => prevCounter + 1);
    }, 750); // 1000ms = 1s

    return () => clearInterval(intervalId); // Clean up on component unmount
  }, []);

  useEffect(() => {
    console.log('Timer is at: ', counter);
    if (counter === 3) {
      // Your desired condition
      handleLoadingDone();
    }
  }, [counter]);

  return (
    <div className={classes.loadingScreen}>
      <div className={classes.airplaneContainer}>
        <AirplanemodeActiveIcon className={classes.airplaneIcon} />
      </div>
      <Typography variant="h6" className={classes.loadingText}>
        {text}
      </Typography>
    </div>
  );
};
