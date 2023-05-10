export const hotels = [
  {
    name: 'Tokyo Luxury Hotel',
    rating: 4.5,
    price: 200,
    currency: 'USD',
    provider: 'Bookings.com',
    images: [
      'https://plus.unsplash.com/premium_photo-1661962739798-0af59dc30d14?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aG90ZWwlMjByb29tJTIwd2l0aCUyMGJlZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60',
    ],
    amenities: {
      gym: true,
      pool: true,
      spa: true,
      restaurant: true,
      wifi: true,
    },
    nearbyAttractions: ['Tokyo Tower', 'Imperial Palace', 'Shinjuku Gyoen National Garden'],
    address: '123 Tokyo Street, Minato, Tokyo, Japan',
  },
  {
    name: 'Tokyo Boutique Hotel',
    rating: 4.0,
    price: 150,
    currency: 'USD',
    provider: 'Hotels.com',
    images: [
      'https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd',
      'https://example.com/tokyo-boutique-hotel-2.jpg',
    ],
    amenities: {
      gym: false,
      pool: false,
      spa: false,
      restaurant: true,
      wifi: true,
    },
    nearbyAttractions: ['Ueno Park', 'Asakusa Shrine', 'Akihabara'],
    address: '456 Tokyo Street, Taito, Tokyo, Japan',
  },
  {
    name: 'Tokyo Budget Inn',
    rating: 3.0,
    price: 50,
    currency: 'USD',
    provider: 'Bookings.com',
    images: [
      'https://images.unsplash.com/photo-1642821236396-ddf27146a316?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8amFwYW4lMjBob3RlbCUyMGxvYmJ5fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60',
      'https://example.com/tokyo-budget-inn-2.jpg',
    ],
    amenities: {
      gym: false,
      pool: false,
      spa: false,
      restaurant: false,
      wifi: true,
    },
    nearbyAttractions: ['Tsukiji Fish Market', 'Odaiba', 'Meiji Shrine'],
    address: '789 Tokyo Street, Shibuya, Tokyo, Japan',
  },
];
