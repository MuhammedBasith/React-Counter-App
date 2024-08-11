import React, { useState } from 'react';
import Dashboard from '../Dashboard';

const DashboardRoute = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [password, setPassword] = useState('');

    const handlePasswordSubmit = () => {
        if (password === 'admin') {
            setIsAuthenticated(true);
        } else {
            alert('Incorrect password. Please try again.');
            setPassword('');
        }
    };

    return (
        <div style={{ marginTop: 100 }}>
            {!isAuthenticated ? (
                <div style={{ textAlign: 'center' }}>
                    <h2>Enter Password to Access Dashboard</h2>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Enter password"
                        style={{ padding: '10px', fontSize: '1em', marginRight: '10px' }}
                    />
                    <button
                        onClick={handlePasswordSubmit}
                        style={{ padding: '10px 20px', fontSize: '1em', cursor: 'pointer' }}
                    >
                        Submit
                    </button>
                </div>
            ) : (
                <Dashboard />
            )}
        </div>
    );
};

export default DashboardRoute;
