import {PropertiesActionTypes} from './properties.types';

export const togglePropertyModal = (toggle) => ({
    type: PropertiesActionTypes.TOGGLE_PROPERTY_MODAL,
    payload: toggle
});

export const setCurrentProperty = (item) => ({
    type: PropertiesActionTypes.SET_CURRENT_PROPERTY,
    payload: item
});