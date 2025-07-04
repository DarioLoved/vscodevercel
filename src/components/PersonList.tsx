import React, { useState } from 'react';
import { Person } from '../types';

interface PersonListProps {
  houseId: string;
  initialPersons: Person[];
  onPersonsChange: (persons: Person[]) => void;
}

const PersonList: React.FC<PersonListProps> = ({ houseId, initialPersons, onPersonsChange }) => {
  const [persons, setPersons] = useState<Person[]>(initialPersons);
  const [newPersonName, setNewPersonName] = useState<string>('');

  const addPerson = () => {
    if (newPersonName.trim()) {
      const newPerson: Person = { id: Date.now().toString(), name: newPersonName.trim() };
      const updatedPersons = [...persons, newPerson];
      setPersons(updatedPersons);
      onPersonsChange(updatedPersons);
      setNewPersonName('');
    }
  };

  const removePerson = (id: string) => {
    const updatedPersons = persons.filter(person => person.id !== id);
    setPersons(updatedPersons);
    onPersonsChange(updatedPersons);
  };

  return (
    <div>
      <h2>Persone nella casa {houseId}</h2>
      <ul>
        {persons.map(person => (
          <li key={person.id}>
            {person.name} <button onClick={() => removePerson(person.id)}>Rimuovi</button>
          </li>
        ))}
      </ul>
      <input
        type="text"
        value={newPersonName}
        onChange={(e) => setNewPersonName(e.target.value)}
        placeholder="Nome della persona"
      />
      <button onClick={addPerson}>Aggiungi Persona</button>
    </div>
  );
};

export default PersonList;