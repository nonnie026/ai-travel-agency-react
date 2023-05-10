import React, { useEffect, useState } from 'react';
import { WelcomeScreen } from '../Screens/WelcomeScreen';
import { FlightFormScreen } from '../Forms/FlightFormScreen';
import { AccommodationFormScreen } from '../Forms/AccommodationFormScreen';
import { FoodInterestsActivitiesFormScreen } from '../Forms/FoodInterestsActivitiesFormScreen';
import { LoadingScreen } from '../Screens/LoadingScreen';
import { HotelOptionsScreen } from '../Screens/HotelOptionsScreen';
import { ItineraryScreen } from '../Screens/ItineraryScreen';

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
    setScreen('hotel-options');
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
      {screen === 'hotel-options' && <HotelOptionsScreen />}
    </>
  );
};
