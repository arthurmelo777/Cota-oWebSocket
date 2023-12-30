import WebSocket from 'ws';
import axios from 'axios';

const wss = new WebSocket.Server({port: 8765});

wss.on('connection', (socket) => {
    console.log('Cliente conectado.');

    socket.on('message', async (message) => {
        try {
            const apiResponse = await axios.get(`https://economia.awesomeapi.com.br/json/last/${message}`);

            if (apiResponse.data && apiResponse.data[`${message}`] && apiResponse.data[`${message}`].bid) {
                const exchangeRate = parseFloat(apiResponse.data[`${message}`].bid);

                const result = 1 / exchangeRate;

                socket.send(`${result.toFixed(2)}`);
            } else {
                throw new Error('Comunicação falhou com a API');
            }
        } catch (err) {
            console.error(err);
            socket.send('Erro');
        }
    })
})