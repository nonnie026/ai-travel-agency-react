export const costs = {
  currency: 'USD',
  accomodation: {
    name: 'Tokyo Luxury Hotel',
    amount: 1400,
  },
  activities: [
    {
      name: 'Tokyo Tower',
      amount: 100,
      reservationDate: '2023-05-21 10:00',
    },
    {
      name: 'Tokyo Skytree',
      amount: 200,
    },
    {
      name: 'Tokyo Disneyland',
      amount: 108,
    },
    {
      name: 'Shinjuku Gyoen National Garden',
      amount: 5,
    },
    {
      name: 'Tokyo Imperial Palace',
      amount: 0,
    },
    {
      name: 'Tokyo National Museum',
      amount: 0,
    },
  ],
  transportation: {
    name: 'Tokyo Metro',
    amount: 100,
  },
  carHire: {
    name: 'Toyota Corolla',
    amount: 100,
  },
  restuarantsReservations: [
    {
      name: 'Sushi Saito',
      reservationDate: '2023-05-22 20:00',
      numberOfPeople: 2,
      reservationFee: 100,
    },
    {
      name: 'Sukiyabashi Jiro',
      reservationDateAndTime: '2023-05-23 20:00',
      numberOfPeople: 2,
      reservationFee: 0,
    },
    {
      name: 'Sushi Yoshitake',
      reservationDateAndTime: '2023-05-24 11:30am',
      numberOfPeople: 1,
      reservationFee: 0,
    },
  ],
  flights: {
    name: 'Brazil, Sao Paulo to Japan, Tokyo',
    type: 'round-trip',
    amount: 1000,
    class: 'economy',
  },
};
