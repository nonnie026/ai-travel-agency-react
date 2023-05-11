import React, { useEffect, useState } from 'react';
import { WelcomeScreen } from '../Screens/WelcomeScreen';
import { FlightFormScreen } from '../Forms/FlightFormScreen';
import { AccommodationFormScreen } from '../Forms/AccommodationFormScreen';
import { FoodInterestsActivitiesFormScreen } from '../Forms/FoodInterestsActivitiesFormScreen';
import { LoadingScreen } from '../Screens/LoadingScreen';
import { HotelOptionsScreen } from '../Screens/HotelOptionsScreen';
import { ItineraryScreen } from '../Screens/ItineraryScreen';
import { TotalCostScreen } from '../Screens/TotalCostScreen';
import { FlightOptionsScreen } from '../Screens/FlightOptionsScreen';
import { TripBookedScreen } from '../Screens/TripBookedScreen';

export const ItineraryContainer = () => {
  const [screen, setScreen] = useState('welcome');

  useEffect(() => {
    const timer = setTimeout(() => {
      setScreen('flight-form'); // Call the setScreen function
    }, 2500); // 2 seconds (2000ms)

    return () => {
      clearTimeout(timer); // Clean up the timer when the component unmounts
    };
  }, []);

  const handleFlightFormSubmit = () => {
    console.log('HERE IN FLIGHTS');
    setScreen('accommodation-form');
  };

  const handleAccommodationsFormSubmit = () => {
    console.log('HERE');
    setScreen('food-interests-activities-form');
  };
  const handleBackToFlightForm = () => {
    setScreen('flight-form');
  };

  const handleBackToAccommodationForm = () => {
    setScreen('accommodation-form');
  };

  const handleCreateItinerary = () => {
    setScreen('loading');
  };
  const handleLoadingDone = () => {
    setScreen('itinerary');
  };

  const handleItineraryConfirmation = () => {
    setScreen('flight-options');
  };
  const handleHotelOptions = () => {
    setScreen('total-cost');
  };
  const handleFlightOptions = () => {
    setScreen('hotel-options');
  };
  const handleBookTrip = () => {
    setScreen('trip-booked');
  };

  return (
    <>
      {screen === 'welcome' && <WelcomeScreen />}
      {screen === 'flight-form' && <FlightFormScreen handleFlightFormSubmit={handleFlightFormSubmit} />}
      {screen === 'accommodation-form' && (
        <AccommodationFormScreen
          handleAccommodationsFormSubmit={handleAccommodationsFormSubmit}
          goBack={handleBackToFlightForm}
        />
      )}
      {screen === 'food-interests-activities-form' && (
        <FoodInterestsActivitiesFormScreen
          handleSubmit={handleCreateItinerary}
          goBack={handleBackToAccommodationForm}
        />
      )}
      {screen === 'loading' && <LoadingScreen handleLoadingDone={handleLoadingDone} />}
      {screen === 'itinerary' && <ItineraryScreen handleItineraryConfirmation={handleItineraryConfirmation} />}
      {screen === 'hotel-options' && <HotelOptionsScreen handleHotelOptions={handleHotelOptions} />}
      {screen === 'flight-options' && <FlightOptionsScreen handleFlightOptions={handleFlightOptions} />}
      {screen === 'total-cost' && <TotalCostScreen bookTrip={handleBookTrip} />}
      {screen === 'trip-booked' && <TripBookedScreen />}
    </>
  );
};
