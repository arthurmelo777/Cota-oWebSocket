const axios = require("axios");
const WebSocket = require("ws");

const endpoint = "https://economia.awesomeapi.com.br/json/last/";

const wss = new WebSocket.Server({ port: 8080 });
let moeda = "";

function fetchAndBroadcastData(moeda, ws) {
  axios
    .get(`${endpoint}${moeda}`)
    .then((response) => {
      const data = response.data[moeda];
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
  console.log(moeda);
  ws.on("close", () => {
    console.log("Cliente desconectado.");
  });
});

setInterval(() => {
  wss.clients.forEach((client) => {
    console.log("ok");
    if (client.readyState === WebSocket.OPEN) {
      fetchAndBroadcastData(moeda, client);
    }
  });
}, 500);
