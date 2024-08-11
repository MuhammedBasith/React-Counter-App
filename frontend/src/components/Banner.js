import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Banner.css'; 

const Banner = () => {
    const [banner, setBanner] = useState({});
    const [timer, setTimer] = useState(null);

    useEffect(() => {
        const fetchBanner = async () => {
            const res = await axios.get(`${process.env.REACT_APP_API_URL}/banner`);
            setBanner(res.data);
            setTimer(res.data.timer);
        };

        fetchBanner();
    }, []);

    useEffect(() => {
        if (timer > 0) {
            const countdown = setInterval(() => setTimer(timer - 1), 1000);
            return () => clearInterval(countdown);
        }
    }, [timer]);

    if (!banner.isVisible || timer <= 0) return null;

    return (
        <div className="banner">
            <p>{banner.description}</p>
            <a href={banner.link}>Click Here</a>
            <p>Disappears in: {timer} seconds</p>
        </div>
    );
};

export default Banner;
