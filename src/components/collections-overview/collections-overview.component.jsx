import React from 'react';
import MapContainer from '../map/map.container';
import Filters from '../filters/filters.component';
import {CollectionsOverviewStyled} from './collections-overview.styles';

const CollectionsOverview = () => {
    return (
        <CollectionsOverviewStyled>
            <Filters/>
            <MapContainer/>
        </CollectionsOverviewStyled>
    )
};

export default CollectionsOverview;