import React, { useState } from 'react';
import './App.css';

const clientes = ['Jomar', 'Marly', 'Carlos', 'Eloah', 'Cadu', 'Juca', 'Sueli', 'João'];

function App() {
    const [busca, setBusca] = useState('');
    console.log(busca);

    const lowerBusca = busca.toLowerCase();

    const clientesFiltrados = clientes.filter((cliente) =>
        cliente.toLowerCase().includes(lowerBusca)
    );

    return (
        <div className="App">
            <p>Buscar Novos Clientes</p>
            <input
                type="text"
                value={busca}
                onChange={(ev) => setBusca(ev.target.value)}
                placeholder="Listas de clientes"
            ></input>
            <p>Clientes:</p>
            <ul>
                {clientesFiltrados.map((cliente) => (
                    <li key={cliente}>{cliente}</li>
                ))}
            </ul>
        </div>
    );
}

export default App;
