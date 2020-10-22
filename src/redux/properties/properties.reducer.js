import PROPERTIES_DATA from './properties.data';
import {PropertiesActionTypes, PropertiesTypes} from './properties.types';
import {setCurrentProperty, filterProperties} from './properties.utils';

const defaultFilters = {
    PROPERTY_TYPE: PropertiesTypes.DETACHED,
    BEDROOMS: 1,
    BATHROOMS: 1
};

const INITIAL_STATE = {
    collections: PROPERTIES_DATA.collections,
    modalHidden: true,
    currentProperty: PROPERTIES_DATA.collections[0],
    currentFilters: defaultFilters,
    filteredCollections: PROPERTIES_DATA.collections
};

const propertiesReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case PropertiesActionTypes.SET_CURRENT_PROPERTY:
            return {
                ...state,
                currentProperty: setCurrentProperty(state.collections, action.payload)
            };
        case PropertiesActionTypes.TOGGLE_PROPERTY_MODAL:
            return {
                ...state,
                modalHidden: !!action.payload
            };
        case PropertiesActionTypes.FILTER_PROPERTIES:
            const {filterType, filterValue} = action.payload;
            return {
                ...state,
                currentFilters: {
                    ...state.currentFilters,
                    filterType: filterValue
                },
                filteredCollections: filterProperties(state.collections, action.payload)
            };
        default:
            return state;
    }
};

export default propertiesReducer;