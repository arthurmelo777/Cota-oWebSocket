const WebSocket = require('ws');
const server = new WebSocket.Server({port: 3001});

server.on('connection', (socket) => {
    console.log('Cliente conectado.');

    socket.on('message', (message) => {
        console.log('Mensagem do cliente: ${message}');

        socket.send('Mensagem recebida');
    });

    socket.on('close', () => {
        console.log('Cliente desconectado');
    });
});