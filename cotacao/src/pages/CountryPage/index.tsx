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
                        <Cotacao moeda={nomeMoedasParse[0]} sigla={`${moedasParse[0]}-${code}`} ></Cotacao>
                        <Cotacao moeda={nomeMoedasParse[1]} sigla={`${moedasParse[1]}-${code}`} ></Cotacao>
                        <Cotacao moeda={nomeMoedasParse[2]} sigla={`${moedasParse[2]}-${code}`} ></Cotacao>
                        <Cotacao moeda={nomeMoedasParse[3]} sigla={`${moedasParse[3]}-${code}`} ></Cotacao>
                        <Cotacao moeda={nomeMoedasParse[4]} sigla={`${moedasParse[4]}-${code}`} ></Cotacao>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CountryPage;