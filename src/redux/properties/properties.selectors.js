import { createSelector } from 'reselect';

const selectProperties = state => state.properties;

export const selectFilteredCollections = createSelector(
    [selectProperties],
    properties => properties.filteredCollections
);

export const selectCurrentProperty = createSelector(
        [selectProperties],
        properties => properties.currentProperty
    );

export const selectModalHidden = createSelector(
    [selectProperties],
    properties => properties.modalHidden
);

export const selectCurrentFilters = createSelector(
    [selectProperties],
    properties => properties.currentFilters
);

console.log('currentFilters ', selectCurrentFilters);