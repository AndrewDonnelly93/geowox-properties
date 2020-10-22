import React from 'react';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import {connect} from 'react-redux';
import {filterProperties} from '../../redux/properties/properties.actions';
import {selectCurrentFilters} from '../../redux/properties/properties.selectors';
import {createStructuredSelector} from 'reselect';

const Filter = ({filterType, filterOptions, currentFilters, filterProperties}) => {
  return (
      <Select
          value={currentFilters.filterType}
          onChange={({target}) => filterProperties({
              filterType,
              filterValue: target.value
          })}
      >
          {
              filterOptions.map(filterValue =>
                  <MenuItem
                      key={filterValue}
                      value={filterValue}
                  >
                      {filterValue}
                  </MenuItem>)
          }
      </Select>
  )
};

const mapStateToProps = createStructuredSelector({
    currentFilters: selectCurrentFilters
});

const mapDispatchToProps = (dispatch) => ({
      filterProperties: (filter) => dispatch(filterProperties(filter))
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(Filter);

