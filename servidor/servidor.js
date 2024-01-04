const axios = require("axios");
const WebSocket = require("ws");

const endpoint = "https://economia.awesomeapi.com.br/json/last/";

const wss = new WebSocket.Server({ port: 8080 });
const clientsMap = new Map();

function fetchAndBroadcastData(ws) {
  const moeda = clientsMap.get(ws);
  console.log(`${endpoint}${moeda}`);
  axios
    .get(`${endpoint}${moeda}`)
    .then((response) => {
      const data = response.data;
      ws.send(JSON.stringify(data));
    })
    .catch((error) => {
      console.error("Erro ao buscar dados:", error.message);
    });
}

wss.on("connection", (ws, req) => {
  console.log("Novo cliente conectado.");

  const urlParams = new URLSearchParams(req.url.split("?")[1]);
  moeda = urlParams.get("moeda");
  if (moeda) clientsMap.set(ws, moeda);
  ws.on("close", () => {
    console.log("Cliente desconectado.");
  });
});

setInterval(() => {
  let i = 0;
  wss.clients.forEach((client) => {
    if (client.readyState === WebSocket.OPEN) {
      fetchAndBroadcastData(client);
    }
  });
}, 10000);
