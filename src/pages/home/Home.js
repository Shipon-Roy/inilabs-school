import React from 'react';
import About from './About';
import ApplyCard from './ApplyCard';
import Banner from './Banner';
import Principle from './Principle';
import Services from './Services';
import Teachers from './Teachers';

const Home = () => {
    return (
        <div>
            <Banner />
            <Services />
            <About />
            <ApplyCard />
            <Principle />
            <Teachers />
        </div>
    );
};

export default Home;