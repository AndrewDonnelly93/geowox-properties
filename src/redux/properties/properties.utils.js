import {PropertiesFiltersTypes} from './properties.types';

export const setCurrentProperty = (collections, currentProperty) => {
    return collections.filter(({lat, lon}) => currentProperty.lat === lat && currentProperty.lon === lon)[0];
};

export const filterProperties = (collections, filter) => {
    const {filterType, filterValue} = filter;
    switch (filterType) {
        case PropertiesFiltersTypes.PROPERTY_TYPE:
            return collections.filter(({propertyType}) => propertyType === filterValue);
        case PropertiesFiltersTypes.BEDROOMS:
            return collections.filter(({beds}) => beds === filterValue);
        case PropertiesFiltersTypes.BATHROOMS:
            return collections.filter(({baths}) => baths === filterValue);
        default:
            return collections;
    }
};