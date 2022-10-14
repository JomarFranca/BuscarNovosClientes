import React from 'react';
import './App.css';

const nomes = [
    {
        id: 1,
        name: 'Jomar',
    },
    {
        id: 2,
        name: 'Marly',
    },
    {
        id: 3,
        name: 'Carlos',
    },
    {
        id: 4,
        name: 'Eloah',
    },
    {
        id: 5,
        name: 'Cadu',
    },
    {
        id: 6,
        name: 'Juca',
    },
    {
        id: 7,
        name: 'Sueli',
    },
    {
        id: 8,
        name: 'João',
    },
];

function App() {
    return (
        <div className="App">
            <p>Buscar Novos</p>
            <input type="text" placeholder="Buscar Novos"></input>
            <textarea rows={6}></textarea>
        </div>
    );
}

export default App;
