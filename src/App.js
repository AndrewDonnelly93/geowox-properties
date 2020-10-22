import React, {lazy, Suspense} from 'react';
import {Switch, Route} from 'react-router-dom';

import {GLobalStyle} from './global.styles';
import Spinner from './components/spinner/spinner.component';
import ErrorBoundary from './components/error-boundary/error-boundary.component';

const HomePage = lazy(() => import('./pages/homepage/homepage.component'));

const App = () => {
    return (
        <div>
            <GLobalStyle/>
            <Switch>
                <ErrorBoundary>
                    <Suspense fallback={<Spinner/>}>
                        <Route exact path='/' component={HomePage}/>
                    </Suspense>
                </ErrorBoundary>
            </Switch>
        </div>
    );
};

export default App;
