import os
import csv
import ssl
import json
import requests
# import amharic_keyboard as ak
from dotenv import load_dotenv
from pymongo import MongoClient
from os.path import dirname, join

dotenv_path = join(dirname(__file__), '.env')
load_dotenv(dotenv_path)

DB_URI = os.environ.get('MONGODB_URI')
client = MongoClient(DB_URI, ssl_cert_reqs=ssl.CERT_NONE)
db = client['words']  # select db
words = db['words']  # select collection

word_list = []
file = './words.csv'
# endpoint = 'http://0.0.0.0:3001/api/words'


def parseCsv(file, collection):
    with open(file, mode='r') as csv_file:
        csv_reader = csv.DictReader(csv_file, delimiter=',')
        for row in csv_reader:
            r = {
                "amharic": row['Amharic'],
                "geez": row['Geez'],
                "english": row['English'],
                "category": row['Category']
            }
            collection.append(r)


def persistJson(file, collection):
    parseCsv(file, collection)
    with open('new_words.json', 'w') as f:
        json.dump(collection, f)


def persistWords(file, collection):
    parseCsv(file, collection)
    seed_data = words.insert_many(collection)
    print(seed_data.inserted_ids)


persistWords(file, word_list)
