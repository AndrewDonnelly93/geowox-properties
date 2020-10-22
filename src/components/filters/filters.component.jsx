import React from 'react';
import Filter from './filter.component';
import {PropertiesFiltersTypes, PropertiesTypes} from '../../redux/properties/properties.types';
import {FiltersStyled} from './filters.styles';
import {prop, uniq} from 'ramda';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {selectFilteredCollections} from '../../redux/properties/properties.selectors';

const getVerbalFilterOptions = (descriptionObject) =>
    Object.keys(descriptionObject).map(filterOption => filterOption);

const getNumericFilterOptions = (filter, filteredCollections) => {
    return uniq(filteredCollections.map(property => prop(filter, property)));
};

const PROPERTY_TYPE_OPTIONS = getVerbalFilterOptions(PropertiesTypes);

const Filters = ({filteredCollections}) => {
    const BEDROOMS_OPTIONS = getNumericFilterOptions('beds', filteredCollections);
    const BATHROOMS_OPTIONS = getNumericFilterOptions('baths', filteredCollections);

    return (
        <>
            <h2>Filters</h2>
            <FiltersStyled>
                <Filter
                    filterType={PropertiesFiltersTypes.PROPERTY_TYPE}
                    filterOptions={PROPERTY_TYPE_OPTIONS}
                />
                <Filter
                    filterType={PropertiesFiltersTypes.BEDROOMS}
                    filterOptions={BEDROOMS_OPTIONS}
                />
                <Filter
                    filterType={PropertiesFiltersTypes.BATHROOMS}
                    filterOptions={BATHROOMS_OPTIONS}
                />
            </FiltersStyled>
        </>
    )
};

const mapStateToProps = createStructuredSelector({
    filteredCollections: selectFilteredCollections
});

export default connect(mapStateToProps)(Filters);