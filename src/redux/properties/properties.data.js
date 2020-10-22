const PROPERTY_TYPES = {
    'TERRACED': 'TERRACED',
    'DETACHED': 'DETACHED',
    'SEMI-DETACHED': 'SEMI-DETACHED',
    'APARTMENT': 'APARTMENT',
};

const PROPERTIES_DATA =
    {
        collections: [
            {
                id: 1,
                'address': '12 Sheelin Grove',
                'lat': '53.248862',
                'lon': '-6.12526',
                'sqm': 82,
                'price': 306000,
                propertyType: PROPERTY_TYPES.TERRACED,
                'satelliteImage': 'https://www.google.com/maps?t=k&q=loc:53.248862,-6.12526',
                baths: 1,
                beds: 1
            },
            {
                id: 2,
                'address': '155 Glencar Lawn',
                'lat': '53.247957',
                'lon': '-6.126351',
                'sqm': 83,
                'price': 350000,
                propertyType: PROPERTY_TYPES.DETACHED,
                'satelliteImage': 'https://www.google.com/maps?t=k&q=loc:53.24795699999999,-6.1263510000000005',
                baths: 1,
                beds: 2
            },
            {
                id: 3,
                'address': '58 Ashlawn Park',
                'lat': '53.253459',
                'lon': '-6.132816',
                'sqm': 80,
                'price': 365000,
                propertyType: PROPERTY_TYPES['SEMI-DETACHED'],
                'satelliteImage': 'https://www.google.com/maps?t=k&q=loc:53.253459,-6.132816',
                baths: 1,
                beds: 2
            },
            {
                id: 4,
                'address': '23 Ashlawn Park',
                'lat': '53.253868',
                'lon': '-6.131429',
                'sqm': 81,
                'price': 270000,
                propertyType: PROPERTY_TYPES.APARTMENT,
                'satelliteImage': 'https://www.google.com/maps?t=k&q=loc:53.253868000000004,-6.131429',
                baths: 2,
                beds: 4
            },
            {
                id: 5,
                'address': '12 Park Road',
                'lat': '53.273675',
                'lon': '-6.135827',
                'sqm': 82,
                'price': 380000,
                propertyType: PROPERTY_TYPES.APARTMENT,
                'satelliteImage': 'https://www.google.com/maps?t=k&q=loc:53.273675,-6.135827',
                baths: 2,
                beds: 4
            },
            {
                id: 6,
                'address': '45 Pinewood',
                'lat': '53.254793',
                'lon': '-6.130788',
                'sqm': 82,
                'price': 260000,
                propertyType: PROPERTY_TYPES.DETACHED,
                'satelliteImage': 'https://www.google.com/maps?t=k&q=loc:53.25479300000001,-6.130788',
                baths: 1,
                beds: 1
            },
            {
                id: 7,
                'address': '21 Pinewood',
                'lat': '53.255704',
                'lon': '-6.131508',
                'sqm': 81,
                'price': 330000,
                propertyType: PROPERTY_TYPES['SEMI-DETACHED'],
                'satelliteImage': 'https://www.google.com/maps?t=k&q=loc:53.255704,-6.131508',
                baths: 1,
                beds: 1
            },
            {
                id: 8,
                'address': '110 Cromlech Fields',
                'lat': '53.245255',
                'lon': '-6.123372',
                'sqm': 82,
                'price': 320000,
                propertyType: PROPERTY_TYPES.TERRACED,
                'satelliteImage': 'https://www.google.com/maps?t=k&q=loc:53.24525500000001,-6.123372',
                baths: 1,
                beds: 1
            },
            {
                id: 9,
                'address': '3 Oakton Park',
                'lat': '53.251618',
                'lon': '-6.130808',
                'sqm': 80,
                'price': 349912,
                propertyType: PROPERTY_TYPES.TERRACED,
                'satelliteImage': 'https://www.google.com/maps?t=k&q=loc:53.25161800000001,-6.130808',
                baths: 1,
                beds: 1
            },
            {
                id: 10,
                'address': '4 Oakton Park',
                'lat': '53.251589',
                'lon': '-6.130885',
                'sqm': 81,
                'price': 349912,
                propertyType: PROPERTY_TYPES.TERRACED,
                'satelliteImage': 'https://www.google.com/maps?t=k&q=loc:53.251589,-6.130885',
                baths: 1,
                beds: 1
            },
            {
                id: 11,
                'address': '19 Ridge Hill',
                'lat': '53.250752',
                'lon': '-6.124195',
                'sqm': 79,
                propertyType: PROPERTY_TYPES.TERRACED,
                'price': 319910,
                'satelliteImage': 'https://www.google.com/maps?t=k&q=loc:53.250752,-6.124194999999999',
                beds: 2
            }
        ]
    };

export default PROPERTIES_DATA;