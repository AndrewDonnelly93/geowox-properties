import React from 'react';
import {Map, GoogleApiWrapper, Marker} from 'google-maps-react';
import Modal from './property-modal.component';

const mapStyles = {
    width: '90%',
    height: '90%',
};

export const PropertiesMap = ({
    google,
    collections,
    currentProperty,
    modalHidden,
    setCurrentProperty,
    togglePropertyModal
  }) => {
    const displayMarkers = () => collections.map((collection, index) =>
            <Marker
                key={index}
                id={index}
                position={{
                    lat: collection.lat,
                    lng: collection.lon
                }}
                onClick={() => {
                    setCurrentProperty({lat: collection.lat, lon: collection.lon});
                    togglePropertyModal(0);
                }
            }/>
    );


    return (
        <>
            <Map
                google={google}
                zoom={8}
                style={mapStyles}
                initialCenter={{
                    lat: currentProperty.lat,
                    lng: currentProperty.lon
                }}
            >
                {displayMarkers()}
            </Map>
            {!modalHidden && <Modal
                modalOpen={!modalHidden}
                handleClose={() => togglePropertyModal(1)}
                currentProperty={currentProperty}
            />}
        </>
    );
};

export default GoogleApiWrapper({
    apiKey: 'AIzaSyDXdwfL_sRZBKsfrvcivWMTfQ5Y4GfUcf0'
})(PropertiesMap);