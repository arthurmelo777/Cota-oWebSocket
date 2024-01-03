import os
from google.cloud import pubsub_v1
from concurrent.futures import TimeoutError

credentials_path = './cotacao-privatekey.json'
os.environ['GOOGLE_APPLICATION_CREDENTIALS'] = credentials_path

timeout = 5.0

subBR = pubsub_v1.SubscriberClient()
subUS = pubsub_v1.SubscriberClient()
subRU = pubsub_v1.SubscriberClient()
subIT = pubsub_v1.SubscriberClient()
subGB = pubsub_v1.SubscriberClient()
subAR = pubsub_v1.SubscriberClient()

subscription_path_br = 'projects/cotacao-410117/subscriptions/br-sub'
subscription_path_us = 'projects/cotacao-410117/subscriptions/us-sub'
subscription_path_ru = 'projects/cotacao-410117/subscriptions/ru-sub'
subscription_path_it = 'projects/cotacao-410117/subscriptions/it-sub'
subscription_path_gb = 'projects/cotacao-410117/subscriptions/gb-sub'
subscription_path_ar = 'projects/cotacao-410117/subscriptions/ar-sub'

def callback(message):
    print(f'Mensagem recebida: {message}')
    print(f'data: {message.data}')
    message.ack()