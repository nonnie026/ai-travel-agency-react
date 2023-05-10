export const flights = [
  {
    id: 'BRJP001',
    origin: 'São Paulo, Brazil (GRU)',
    destination: 'Tokyo, Japan (NRT)',
    airline: {
      name: 'LATAM Airlines',
      iata_code: 'LA',
      logo: 'https://example.com/latam_logo.png',
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
    airline: {
      name: 'ANA',
      iata_code: 'NH',
      logo: 'https://example.com/ana_logo.png',
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
];
