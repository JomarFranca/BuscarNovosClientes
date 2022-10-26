import React, { useState } from 'react';
import './App.css';

function App() {
    const clientes = [
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

    console.log(clientes.name);

    return (
        <div className="App">
            <p>Buscar Novos</p>
            <input type="text" placeholder="Buscar Novos"></input>
            {/* <button id="btn" className="btn">
                Enviar
            </button> */}
            <div>
                <p>Clientes:</p>
                <ul>
                    {clientes.map((cliente) => (
                        <li key={cliente}>{cliente.name}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default App;
