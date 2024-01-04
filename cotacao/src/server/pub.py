import os
from google.cloud import pubsub_v1
import requests

credentials_path = './cotacao-privatekey.json'
os.environ['GOOGLE_APPLICATION_CREDENTIALS'] = credentials_path

publisher = pubsub_v1.PublisherClient()
topic_path = 'projects/cotacao-410117/topics/cotacao-moeda'

def fetch_exchange_rate(message):
    try:
        api_response = requests.get(f'https://economia.awesomeapi.com.br/json/last/{message}')
        
        if api_response.json() and api_response.json()[message.replace("-", "")] and api_response.json()[message.replace("-", "")]['bid']:
            exchange_rate = float(api_response.json()[message.replace("-", "")]['bid'])
            result = 1 / exchange_rate
            data = str('{:.2f}'.format(result))
            data = data.encode('utf-8')
            
            future = publisher.publish(topic_path, data)
            print(f'Mensagem publicada. ID: {future.result()}')
        else:
            raise Exception('Comunicação falhou com a API')
    except Exception as e:
        print(e)
        return 'Erro'