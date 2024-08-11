import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './components/Dashboard.css';

const Dashboard = () => {
    const [banner, setBanner] = useState({
        description: '',
        timer: '',
        link: '',
        isVisible: true
    });

    useEffect(() => {
        const fetchBanner = async () => {
            try {
                const res = await axios.get(`${process.env.REACT_APP_API_URL}/banner`);
                setBanner(res.data);
            } catch (error) {
                console.error('Error fetching banner data:', error);
            }
        };

        fetchBanner();
    }, []);

    const handleChange = (e) => {
        setBanner({ ...banner, [e.target.name]: e.target.value });
    };

    const handleToggle = () => {
        setBanner({ ...banner, isVisible: !banner.isVisible });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.put(`${process.env.REACT_APP_API_URL}/banner`, banner);
            alert('Banner updated successfully');
        } catch (error) {
            console.error('Error updating banner:', error);
            alert('Error updating banner');
        }
    };

    return (
        <div className="dashboard">
            <h2>Banner Dashboard</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Description:
                    <input
                        type="text"
                        name="description"
                        value={banner.description}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    Timer (seconds):
                    <input
                        type="number"
                        name="timer"
                        value={banner.timer}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    Link:
                    <input
                        type="text"
                        name="link"
                        value={banner.link}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    Banner Visible:
                    <input
                        type="checkbox"
                        checked={banner.isVisible}
                        onChange={handleToggle}
                    />
                </label>
                <button type="submit">Update Banner</button>
            </form>
        </div>
    );
};

export default Dashboard;
