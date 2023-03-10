import React, { Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';
import RouteConfig from './router/router'
import useAutoLogout from './hooks/useAutoLogout'


const App = () => {
    useAutoLogout();
    return (
        <div>
            <BrowserRouter>
                <Suspense fallback={<div>loading...</div>}>
                    <RouteConfig/>
                </Suspense>
            </BrowserRouter>
        </div>
    );
};
export default App;