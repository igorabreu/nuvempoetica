const mapStyles = [
  {
    featureType: 'all',
    elementType: 'labels.text.fill',
    stylers: [
      {
        saturation: '-64',
      },
      {
        color: '#f1f2f2',
      },
      {
        lightness: '-40',
      },
      {
        gamma: '5.76',
      },
    ],
  },
  {
    featureType: 'all',
    elementType: 'labels.text.stroke',
    stylers: [
      {
        visibility: 'on',
      },
      {
        lightness: '21',
      },
      {
        gamma: '0.48',
      },
      {
        weight: '7.99',
      },
      {
        color: '#2d003b',
      },
    ],
  },
  {
    featureType: 'all',
    elementType: 'labels.icon',
    stylers: [
      {
        visibility: 'off',
      },
    ],
  },
  {
    featureType: 'administrative',
    elementType: 'geometry.fill',
    stylers: [
      {
        lightness: 20,
      },
      {
        color: '#2d003b',
      },
    ],
  },
  {
    featureType: 'administrative',
    elementType: 'geometry.stroke',
    stylers: [
      {
        color: '#fefefe',
      },
      {
        lightness: 17,
      },
      {
        weight: 1.2,
      },
    ],
  },
  {
    featureType: 'administrative.country',
    elementType: 'geometry.fill',
    stylers: [
      {
        color: '#2d003b',
      },
    ],
  },
  {
    featureType: 'administrative.country',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#02dd96',
      },
    ],
  },
  {
    featureType: 'administrative.province',
    elementType: 'geometry.fill',
    stylers: [
      {
        color: '#2d003b',
      },
    ],
  },
  {
    featureType: 'administrative.locality',
    elementType: 'labels.text',
    stylers: [
      {
        visibility: 'on',
      },
    ],
  },
  {
    featureType: 'landscape',
    elementType: 'geometry',
    stylers: [
      {
        color: '#f5f5f5',
      },
      {
        lightness: 20,
      },
    ],
  },
  {
    featureType: 'landscape',
    elementType: 'geometry.fill',
    stylers: [
      {
        color: '#2d003b',
      },
      {
        visibility: 'on',
      },
    ],
  },
  {
    featureType: 'landscape.natural',
    elementType: 'geometry.fill',
    stylers: [
      {
        color: '#2d003b',
      },
    ],
  },
  {
    featureType: 'poi',
    elementType: 'all',
    stylers: [
      {
        visibility: 'on',
      },
    ],
  },
  {
    featureType: 'poi',
    elementType: 'geometry',
    stylers: [
      {
        lightness: 21,
      },
      {
        color: '#2d003b',
      },
    ],
  },
  {
    featureType: 'poi',
    elementType: 'labels',
    stylers: [
      {
        visibility: 'off',
      },
    ],
  },
  {
    featureType: 'poi.park',
    elementType: 'geometry',
    stylers: [
      {
        color: '#02dd96',
      },
      {
        lightness: 21,
      },
    ],
  },
  {
    featureType: 'road',
    elementType: 'geometry.fill',
    stylers: [
      {
        color: '#2d003b',
      },
      {
        lightness: '-63',
      },
      {
        visibility: 'on',
      },
      {
        weight: '1.58',
      },
    ],
  },
  {
    featureType: 'road.highway',
    elementType: 'geometry.fill',
    stylers: [
      {
        color: '#f40c53',
      },
      {
        lightness: 17,
      },
    ],
  },
  {
    featureType: 'road.highway',
    elementType: 'geometry.stroke',
    stylers: [
      {
        color: '#ffffff',
      },
      {
        lightness: 29,
      },
      {
        weight: '0.01',
      },
      {
        visibility: 'off',
      },
    ],
  },
  {
    featureType: 'road.arterial',
    elementType: 'all',
    stylers: [
      {
        visibility: 'on',
      },
    ],
  },
  {
    featureType: 'road.arterial',
    elementType: 'geometry',
    stylers: [
      {
        color: '#ffff32',
      },
      {
        lightness: 18,
      },
      {
        weight: '0.90',
      },
    ],
  },
  {
    featureType: 'road.arterial',
    elementType: 'geometry.stroke',
    stylers: [
      {
        weight: '0.01',
      },
    ],
  },
  {
    featureType: 'road.arterial',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#02dd96',
      },
    ],
  },
  {
    featureType: 'road.local',
    elementType: 'geometry',
    stylers: [
      {
        lightness: 16,
      },
      {
        weight: '0.11',
      },
      {
        color: '#8e5fea',
      },
    ],
  },
  {
    featureType: 'transit',
    elementType: 'all',
    stylers: [
      {
        visibility: 'off',
      },
    ],
  },
  {
    featureType: 'transit',
    elementType: 'geometry',
    stylers: [
      {
        color: '#f2f2f2',
      },
      {
        lightness: 19,
      },
    ],
  },
  {
    featureType: 'transit.station.bus',
    elementType: 'all',
    stylers: [
      {
        visibility: 'off',
      },
    ],
  },
  {
    featureType: 'transit.station.rail',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#a92222',
      },
      {
        visibility: 'off',
      },
    ],
  },
  {
    featureType: 'water',
    elementType: 'all',
    stylers: [
      {
        saturation: '0',
      },
      {
        color: '#ffffff',
      },
    ],
  },
  {
    featureType: 'water',
    elementType: 'geometry',
    stylers: [
      {
        color: '#e9e9e9',
      },
      {
        lightness: 17,
      },
    ],
  },
  {
    featureType: 'water',
    elementType: 'geometry.fill',
    stylers: [
      {
        color: '#3671ec',
      },
    ],
  },
]

export default mapStyles
