export const flights = [
  {
    id: 'BRJP001',
    origin: 'São Paulo, Brazil (GRU)',
    destination: 'Tokyo, Japan (NRT)',
    provider: 'lastminute.com',
    airline: {
      name: 'LATAM Airlines',
      iata_code: 'LA',
      logo: 'https://images.unsplash.com/photo-1444313431167-e7921088a9d3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fExBVEFNJTIwQWlybGluZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60',
    },
    departure_time: '2023-06-01T07:30:00',
    arrival_time: '2023-06-02T16:30:00',
    duration: 26,
    stopovers: 1,
    layover_cities: ['Los Angeles, USA (LAX)'],
    economy: {
      price: 1350,
      currency: 'USD',
      baggage: {
        checked: '1x23kg',
        carry_on: '1x8kg',
      },
    },
    business: {
      price: 4350,
      currency: 'USD',
      baggage: {
        checked: '2x32kg',
        carry_on: '1x16kg',
      },
    },
  },
  {
    id: 'BRJP002',
    origin: 'São Paulo, Brazil (GRU)',
    destination: 'Tokyo, Japan (NRT)',
    provider: 'Travelup.com',
    airline: {
      name: 'ANA',
      iata_code: 'NH',
      logo: 'https://images.unsplash.com/photo-1646167640318-cacbe81d16fd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8TEFUQU0lMjBBaXJsaW5lfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60',
    },
    departure_time: '2023-06-01T10:45:00',
    arrival_time: '2023-06-02T19:15:00',
    duration: 23,
    stopovers: 1,
    layover_cities: ['Houston, USA (IAH)'],
    economy: {
      price: 1550,
      currency: 'USD',
      baggage: {
        checked: '1x23kg',
        carry_on: '1x10kg',
      },
    },
    business: {
      price: 4800,
      currency: 'USD',
      baggage: {
        checked: '2x32kg',
        carry_on: '1x16kg',
      },
    },
  },
  {
    id: 'BRJP003',
    origin: 'São Paulo, Brazil (GRU)',
    destination: 'Tokyo, Japan (NRT)',
    provider: 'Booking.com',
    airline: {
      name: 'Emirates',
      iata_code: 'EK',
      logo: 'https://images.unsplash.com/photo-1607563424269-4984d7dd60b8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fExBVEFNJTIwQWlybGluZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60',
    },
    departure_time: '2023-06-01T15:00:00',
    arrival_time: '2023-06-02T20:00:00',
    duration: 25,
    stopovers: 1,
    layover_cities: ['Dubai, UAE (DXB)'],
    economy: {
      price: 1450,
      currency: 'USD',
      baggage: {
        checked: '1x25kg',
        carry_on: '1x7kg',
      },
    },
    business: {
      price: 4700,
      currency: 'USD',
      baggage: {
        checked: '2x32kg',
        carry_on: '1x14kg',
      },
    },
  },
];
