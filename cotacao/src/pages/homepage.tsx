import React from 'react'
import CardCountry from '../components/CardCountry';
import Header from '../components/Header';

const HomePage = () => {
    return (
        <div>
            <Header></Header>
            <CardCountry nome='Brasil' bandeira='url' moeda='Real'></CardCountry>
            <CardCountry nome='Estados Unidos' bandeira='url' moeda='Dolar'></CardCountry>
            <CardCountry nome='Russia' bandeira='url' moeda='Rublo Russo'></CardCountry>
            <CardCountry nome='Italia' bandeira='url' moeda='Euro'></CardCountry>
            <CardCountry nome='Inglaterra' bandeira='url' moeda='Libra esterlina'></CardCountry>
            <CardCountry nome='Argentina' bandeira='url' moeda='Peso argentino'></CardCountry>
        </div>
    );
}

export default HomePage;