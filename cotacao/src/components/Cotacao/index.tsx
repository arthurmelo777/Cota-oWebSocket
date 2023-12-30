import React, { useEffect, useState } from "react";

interface Props {
    moeda: string
    sigla: string
    socket: any
}

const Cotacao = ({moeda, sigla, socket}: Props) => {
    const [cotacao, setCotacao] = useState('');
    
    useEffect (() => {
        socket.onmessage = (event: any) => {
            socket.send(sigla)
            setCotacao(event.data);
        }
    }, [])

    return (
        <div>
            {cotacao} {moeda}
        </div>
    )
}

export default Cotacao;