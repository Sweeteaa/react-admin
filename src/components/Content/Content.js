import React from 'react';
import Recycle from '../Order/Recycle/Recycle';
import Change from '../Order/Change/Change';
import { Route, Routes } from 'react-router-dom';
import First from './First/First';
import Resource from '../Resource/Resource';
import Rchart from '../Charts/Recycle/Rchart/Rchart';
import Uchart from '../Charts/Use/Uchart/Uchart';
import Userchart from '../Charts/User/Userchart/Userchart';
import Audit from '../Order/Audit/Audit';
import Activity from '../Resource/Activity/Activity';

const Contents = () => {
    return (
        <div
            style={{
                padding: 24,
                minHeight: '75vh',
            }}
        >
            <Routes>
                <Route exact path="first" element={<First />} />
                <Route exact path="rchart" element={<Rchart/>}/>
                <Route exact path="uchart" element={<Uchart/>}/>
                <Route exact path="userchart" element={<Userchart/>}/>
                <Route exact path="audit" element={<Audit />} />
                <Route exact path="recycle" element={<Recycle />} />
                <Route exact path="change" element={<Change />} />
                <Route exact path="resource" element={<Resource />} />
                <Route exact path="activity" element={<Activity />} />
            </Routes>
        </div>
    );
};

export default Contents;