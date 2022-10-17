import React, { useState } from 'react';
import './App.css';

function App() {
    const cliente = [
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
    const [enviado, setEnviado] = useState(false);
    console.log(cliente);
    document.getElementById('demo').innerHTML = cliente.map();
    return (
        <div className="App">
            <p>Buscar Novos</p>
            <input type="text" placeholder="Buscar Novos"></input>
            <button id="btn" className="btn" onClick={() => setEnviado(true)}>
                Enviar
            </button>
            <div>
                <p>Clientes:{enviado}</p>
                <p id="demo"></p>
            </div>
        </div>
    );
}

export default App;
