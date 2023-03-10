import React from 'react';
import Recycle from '../Order/Recycle/Recycle';
import Change from '../Order/Change';
import { Route, Routes } from 'react-router-dom';
import First from './First';
import Resource from '../Resource/Resource';

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
                <Route exact path="recycle" element={<Recycle />} />
                <Route exact path="change" element={<Change />} />
                <Route exact path="resource" element={<Resource />} />
            </Routes>
        </div>
    );
};

export default Contents;