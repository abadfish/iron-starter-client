import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <h1>Welcome To Iron Starter</h1>
            <p>Click <Link to='/campaigns'>here</Link> to see the available campaigns to support</p>
        </div>
    )
}

export default Home;