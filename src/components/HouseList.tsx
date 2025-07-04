import React, { useState } from 'react';
import { House } from '../types';

const HouseList: React.FC<{ houses: House[]; onAddHouse: (house: House) => void; onEditHouse: (house: House) => void; onDeleteHouse: (id: string) => void; }> = ({ houses, onAddHouse, onEditHouse, onDeleteHouse }) => {
    const [newHouseName, setNewHouseName] = useState('');

    const handleAddHouse = () => {
        if (newHouseName.trim()) {
            onAddHouse({ id: Date.now().toString(), name: newHouseName });
            setNewHouseName('');
        }
    };

    return (
        <div>
            <h2>Elenco delle Case</h2>
            <input
                type="text"
                value={newHouseName}
                onChange={(e) => setNewHouseName(e.target.value)}
                placeholder="Nome della nuova casa"
            />
            <button onClick={handleAddHouse}>Aggiungi Casa</button>
            <ul>
                {houses.map((house) => (
                    <li key={house.id}>
                        {house.name}
                        <button onClick={() => onEditHouse(house)}>Modifica</button>
                        <button onClick={() => onDeleteHouse(house.id)}>Elimina</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default HouseList;