import React, { useEffect, useState } from "react";

interface Props {
<<<<<<< HEAD
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
=======
    moeda: string;
    sigla: string;
}

let socket: WebSocket;

const Cotacao = ({ moeda, sigla }: Props) => {
    const [cotacao, setCotacao] = useState<any>({});

    useEffect(() => {
        socket = new WebSocket(`ws://localhost:8080/?moeda=${sigla}`);
        socket.onopen = () => {
            console.log("Conexão com o servidor aberta.");
        };
    }, []);

    useEffect(() => {
        socket.onmessage = (event: any) => {
            const data = JSON.parse(event.data);
            const keys = Object.keys(data);
            console.log(data);
            let { ask } = data[keys[0]];
            setCotacao({ ask });
        };
        return () => {
            socket.close();
        };
    }, []);


>>>>>>> 400892061e7794c00d59d577d0cf4aa59ba205e6

    return (
        <tr>
            <td>{cotacao.ask}</td> <td>{moeda}</td>{" "}
        </tr>
    );
};

export default Cotacao;
