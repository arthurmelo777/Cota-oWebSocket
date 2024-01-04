from flask import Flask, jsonify, request
from sub import send_cotacao
from pub import fetch_exchange_rate

app = Flask(__name__)

@app.route('/api/send_cotacao', methods=['GET'])
def api_send_cotacao():
    resultado = send_cotacao()
    return jsonify({"message": resultado})

@app.route('/api/fetch_exchange_rate', methods=['POST'])
def api_fetch_exchange_rate():
    try:
        message = request.json['message']
        fetch_exchange_rate(message)
    except Exception as e:
        return e

if __name__ == '__main__':
    app.run(debug=True)