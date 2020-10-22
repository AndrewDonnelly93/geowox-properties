import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {selectCurrentProperty, selectFilteredCollections, selectModalHidden} from '../../redux/properties/properties.selectors';
import {setCurrentProperty, togglePropertyModal} from '../../redux/properties/properties.actions';
import PropertiesMap from './map.component';


export const MapContainer = ({
    collections,
    currentProperty,
    modalHidden,
    setCurrentProperty,
    togglePropertyModal
 }) => {

    return (
        <PropertiesMap
            collections={collections}
            currentProperty={currentProperty}
            modalHidden={modalHidden}
            setCurrentProperty={setCurrentProperty}
            togglePropertyModal={togglePropertyModal}
        />
    );
};

export const mapStateToProps = createStructuredSelector({
    collections: selectFilteredCollections,
    currentProperty: selectCurrentProperty,
    modalHidden: selectModalHidden
});

export const mapDispatchToProps = (dispatch) => ({
    setCurrentProperty: (item) => dispatch(setCurrentProperty(item)),
    togglePropertyModal: (toggle) => dispatch(togglePropertyModal(toggle))
});

export default connect(mapStateToProps, mapDispatchToProps)(MapContainer);