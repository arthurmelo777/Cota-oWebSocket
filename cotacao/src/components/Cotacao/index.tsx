import React, { useEffect, useState } from "react";

interface Props {
    moeda: string
    sigla: string
}

const Cotacao = ({moeda, sigla}: Props) => {
    const [cotacao, setCotacao] = useState('');
    
    useEffect (() => {
        async function fetchData() {
            try {
                const response = await fetch('https://localhost:5000/api/send_cotacao')
                const data = await response.json()
                setCotacao(data.mensagem)
            } catch (err) {
                console.error(err)
            }
        }

        fetchData();
    }, [])

    useEffect (() => {
        async function fetchData() {
            try {
                const response = await fetch('http://localhost:5000/api/fetch_exchange_rate', {
                    method: 'POST',
                    body: JSON.stringify({message: sigla}),
                });
                console.log(response);
            } catch (err) {
                console.error(err)
            }
        }

        fetchData();
    }, [])

    return (
        <tr>
            <td>{cotacao}</td> <td>{moeda}</td>{" "}
        </tr>
    );
};

export default Cotacao;
