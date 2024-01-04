import React, { useEffect, useState } from "react";

interface Props {
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



    return (
        <tr>
            <td>{cotacao.ask}</td> <td>{moeda}</td>{" "}
        </tr>
    );
};

export default Cotacao;
