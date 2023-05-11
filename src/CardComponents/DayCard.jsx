import React from 'react';
import { Card, CardContent, Typography } from '@material-ui/core';

export const DayCard = () => (
  <Card style={{ marginBottom: '15px' }}>
    <CardContent>
      <Typography variant="body1">
        Thank you for making your booking. We have sent the final itinerary to your email: email@gmail.com
      </Typography>
    </CardContent>
  </Card>
);
