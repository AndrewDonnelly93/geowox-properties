import React, {Profiler} from 'react';
import {HomePageContainer} from './homepage.styles';
import CollectionsOverviewContainer from '../../components/collections-overview/collections-overview.container';

const HomePage = () => (
    <HomePageContainer>
        <Profiler id="Directory" onRender={(id, phase, actualDuration) => {
            console.log({id, phase, actualDuration});
        }}>
            <CollectionsOverviewContainer/>
        </Profiler>
    </HomePageContainer>
);

export default HomePage;