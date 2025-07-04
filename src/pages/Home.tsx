import React from 'react';
import HouseList from '../components/HouseList';
import PersonList from '../components/PersonList';

const Home: React.FC = () => {
    return (
        <div className="home-container">
            <h1>Gestione Bollette</h1>
            <h2>Le tue case</h2>
            <HouseList />
            <h2>Persone associate</h2>
            <PersonList />
        </div>
    );
};

export default Home;