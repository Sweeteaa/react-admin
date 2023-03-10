import React from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
import Contents from '../components/Content/Content';
import First from '../components/Content/First';
import Change from '../components/Order/Change';
import Recycle from '../components/Order/Recycle/Recycle';
import Resource from '../components/Resource/Resource';
import Enter from '../pages/Enter/Enter';
import Home from '../pages/Home/Home';

const router = () => {
    return (
        <Routes>
            <Route path={"/"} element={<Enter/>}/>
            <Route path={"/login"} element={<Enter/>}/>
            <Route path={"/home/*"} element={<Home/>}>
                <Route path={"first"} element={<First/>}/>
                <Route path={"recycle"} element={<Recycle/>}/>
                <Route path={"change"} element={<Change/>}/>
                <Route path={"resource"} element={<Resource/>}/>
            </Route>
        </Routes>
    );
};

export default router;