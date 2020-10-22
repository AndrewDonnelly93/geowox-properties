import PROPERTIES_DATA from './properties.data';
import {PropertiesActionTypes} from './properties.types';
import {setCurrentProperty} from './properties.utils';

const INITIAL_STATE = {
    collections: PROPERTIES_DATA.collections,
    modalHidden: true,
    currentProperty: PROPERTIES_DATA.collections[0]
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
        default:
            return state;
    }
};

export default propertiesReducer;