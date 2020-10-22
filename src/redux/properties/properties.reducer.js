import PROPERTIES_DATA from './properties.data';
import {PropertiesActionTypes, PropertiesTypes} from './properties.types';
import {setCurrentProperty, filterProperties} from './properties.utils';

const defaultFilters = {
    PROPERTY_TYPE: PropertiesTypes.DETACHED,
    BEDROOMS: null,
    BATHROOMS: null
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
            const updatedFilters = Object.entries(state.currentFilters).map((filter) =>
                filter[0] === filterType ? [filter[0], filterValue] : [filter[0], filter[1]]);
            const newFilters = {};
            updatedFilters.forEach(filter => {
               newFilters[filter[0]] = filter[1];
            });

            return {
                ...state,
                currentFilters: newFilters,
                filteredCollections: filterProperties(state.filteredCollections, action.payload)
            };
        default:
            return state;
    }
};

export default propertiesReducer;