import os
from google.cloud import pubsub_v1
from concurrent.futures import TimeoutError

credentials_path = './cotacao-privatekey.json'
os.environ['GOOGLE_APPLICATION_CREDENTIALS'] = credentials_path

timeout = 5.0

def send_cotacao(message_str):
    return message_str

def callback(message):
    message_str = message.data.decode('utf-8')
    send_cotacao(message_str)
    message.ack()

# instanciar clientes subs

subscriber = pubsub_v1.SubscriberClient()

# definir path do sub

subscription_path = 'projects/cotacao-410117/subscriptions/cotacao-sub'

# recebe mensagem asincronamente

pull_future = subscriber.subscribe(subscription_path, callback=callback)
print(f'Ouvindo em {subscription_path}')

# ciclos de vida

try:
    pull_future.result()
except KeyboardInterrupt:
    print("Recebimento de mensagens interrompido.")
except Exception as e:
    print(f"Erro ao receber mensagens: {e}")
    pull_future.cancel()
    pull_future.result()