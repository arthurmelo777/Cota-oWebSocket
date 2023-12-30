import React, { useEffect } from 'react'
import Cotacao from '../../components/Cotacao'
import Header from '../../components/Header'

interface Props {
    bandeira: string,
    nome: string,
    moeda: string,
    code: string
    moedasParse: string[]
    nomeMoedasParse: string[]
}

const CountryPage = ({bandeira, nome, moeda, code, moedasParse, nomeMoedasParse}: Props) => {
    const newSocket = new WebSocket('ws://localhost:8000');

    useEffect(() => {
        newSocket.onopen = () => {
          console.log('Conexão com o servidor aberta.');
        };
      
        newSocket.onclose = (event) => {
          console.log('Conexão com o servidor fechada:', event);
        };
      
        newSocket.onerror = (error) => {
          console.error('Erro na conexão com o servidor:', error);
        };
      
        return () => {
          newSocket.close();
        };
      }, []);
      

    return (
        <div>
            <Header></Header>
            <div className='container'>
                <div className='row'>
                    <div className='col-6'>
                    <div className="image-container">
                        <img
                            src={bandeira}
                            className="card-img-top img-fluid rounded"
                            alt="..."
                            style={{ height: "200px", width: '200px' }}
                        />
                    </div>
                        <h3>{nome}</h3>
                        <p>{moeda}</p>
                    </div>
                    <div className="col-6">
                        <h3>1.00 {moeda} equivale a:</h3>
                        <Cotacao moeda={nomeMoedasParse[0]} sigla={`${moedasParse[0]}-${code}`} socket={newSocket}></Cotacao>
                        <Cotacao moeda={nomeMoedasParse[1]} sigla={`${moedasParse[1]}-${code}`} socket={newSocket}></Cotacao>
                        <Cotacao moeda={nomeMoedasParse[2]} sigla={`${moedasParse[2]}-${code}`} socket={newSocket}></Cotacao>
                        <Cotacao moeda={nomeMoedasParse[3]} sigla={`${moedasParse[3]}-${code}`} socket={newSocket}></Cotacao>
                        <Cotacao moeda={nomeMoedasParse[4]} sigla={`${moedasParse[4]}-${code}`} socket={newSocket}></Cotacao>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CountryPage;