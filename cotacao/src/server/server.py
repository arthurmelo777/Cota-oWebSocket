import asyncio
import websockets

async def handle_socket(websocket, path):
    # Configuração do cabeçalho Access-Control-Allow-Origin
    response = websockets.http.Response(
        status=101,
        headers={
            "Upgrade": "websocket",
            "Connection": "Upgrade",
            "Sec-WebSocket-Accept": websockets.handshake.check_handshake(
                websocket.request_headers.get("Sec-WebSocket-Key")
            ),
            "Access-Control-Allow-Origin": "http://localhost:5173",  # Substitua pela origem real do seu aplicativo React
        },
    )
    await response.write(websocket.writer)

    print("Cliente conectado.")
    
    async for message in websocket:
        try:
            # Simplesmente retransmitir a mensagem recebida de volta ao cliente
            await websocket.send(message)
        except websockets.exceptions.ConnectionClosedError:
            print("Cliente desconectado.")

async def main():
    server = await websockets.serve(handle_socket, "localhost", 8000)
    print(f"Servidor WebSocket está ouvindo em {server.sockets[0].getsockname()}")

    await server.wait_closed()

if __name__ == "__main__":
    asyncio.run(main())
