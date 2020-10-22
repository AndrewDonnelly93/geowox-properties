import { createSelector } from 'reselect';

const selectProperties = state => state.properties;

export const selectCollections = createSelector(
    [selectProperties],
    properties => properties.collections
);

export const selectCollectionsForPreview = createSelector(
    [selectCollections],
    collections => Object.keys(collections).map(key => collections[key])
);

export const selectCurrentProperty = createSelector(
        [selectProperties],
        properties => properties.currentProperty
    );

export const selectModalHidden = createSelector(
    [selectProperties],
    properties => properties.modalHidden
);