import React from 'react'
import CardCountry from '../../components/CardCountry';
import Header from '../../components/Header';
import './style.css'
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
    const navigate = useNavigate();

    const handleNavigateBR = () => {
        navigate('/BR')
    }

    const handleNavigateUS = () => {
        navigate('/US')
    }

    const handleNavigateRU = () => {
        navigate('/RU')
    }

    const handleNavigateIT = () => {
        navigate('/IT')
    }

    const handleNavigateGB = () => {
        navigate('/GB')
    }

    const handleNavigateAR = () => {
        navigate('/AR')
    }

    return (
        <div>
            <Header></Header>
            <div className='body'>
                <button onClick={handleNavigateBR}>
                    <CardCountry nome='Brasil' bandeira='https://flagcdn.com/w2560/br.png' moeda='Real'></CardCountry>
                </button>
                <button onClick={handleNavigateUS}>
                    <CardCountry nome='Estados Unidos' bandeira='https://flagcdn.com/w2560/us.png' moeda='Dolar'></CardCountry>
                </button>
                <button onClick={handleNavigateRU}>
                    <CardCountry nome='Russia' bandeira='https://flagcdn.com/w2560/ru.png' moeda='Rublo Russo'></CardCountry>
                </button>
                <button onClick={handleNavigateIT}>
                    <CardCountry nome='Italia' bandeira='https://flagcdn.com/w2560/it.png' moeda='Euro'></CardCountry>
                </button>
                <button onClick={handleNavigateGB}>
                    <CardCountry nome='Inglaterra' bandeira='https://flagcdn.com/w2560/gb-eng.png' moeda='Libra esterlina'></CardCountry>
                </button>
                <button onClick={handleNavigateAR}>
                    <CardCountry nome='Argentina' bandeira='https://flagcdn.com/w2560/ar.png' moeda='Peso argentino'></CardCountry>
                </button>
                
                
                
                
                
            </div>
        </div>
    );
}

export default HomePage;