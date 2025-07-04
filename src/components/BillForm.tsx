import React, { useState } from 'react';

const BillForm = ({ onAddBill }) => {
    const [period, setPeriod] = useState('');
    const [reading, setReading] = useState('');
    const [house, setHouse] = useState('');
    const [person, setPerson] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (period && reading && house && person) {
            onAddBill({ period, reading, house, person });
            setPeriod('');
            setReading('');
            setHouse('');
            setPerson('');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Periodo:</label>
                <input
                    type="text"
                    value={period}
                    onChange={(e) => setPeriod(e.target.value)}
                    required
                />
            </div>
            <div>
                <label>Reading:</label>
                <input
                    type="number"
                    value={reading}
                    onChange={(e) => setReading(e.target.value)}
                    required
                />
            </div>
            <div>
                <label>Casa:</label>
                <input
                    type="text"
                    value={house}
                    onChange={(e) => setHouse(e.target.value)}
                    required
                />
            </div>
            <div>
                <label>Persona:</label>
                <input
                    type="text"
                    value={person}
                    onChange={(e) => setPerson(e.target.value)}
                    required
                />
            </div>
            <button type="submit">Aggiungi Bolletta</button>
        </form>
    );
};

export default BillForm;