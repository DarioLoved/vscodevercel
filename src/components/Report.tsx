import React from 'react';
import { Bill, Person } from '../types';
import { calculateTotalExpenses, calculateExpensesPerPerson } from '../utils/calculations';

interface ReportProps {
    bills: Bill[];
    people: Person[];
}

const Report: React.FC<ReportProps> = ({ bills, people }) => {
    const totalExpenses = calculateTotalExpenses(bills);
    const expensesPerPerson = calculateExpensesPerPerson(bills, people);

    return (
        <div className="report">
            <h2>Report delle Spese</h2>
            <h3>Spese Totali: {totalExpenses} €</h3>
            <h4>Ripartizione delle Spese per Persona:</h4>
            <ul>
                {people.map(person => (
                    <li key={person.id}>
                        {person.name}: {expensesPerPerson[person.id] || 0} €
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Report;