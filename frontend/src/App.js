import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './routes/Home';
import DashboardRoute from './routes/DashboardRoutes';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/dashboard" element={<DashboardRoute />} />
            </Routes>
        </Router>
    );
};

export default App;
