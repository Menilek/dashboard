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
file = './new_words.csv'
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


# persistWords(file, word_list)


def createCSV():
    with open('new_words.csv', 'w', newline='') as file:
        writer = csv.writer(file)
        writer.writerow(["English", "Amharic", "Geez", "Category"])
        writer.writerow(["Listen", "Mesmat", "መስማት", "Verb"])
        writer.writerow(["Live",	"Menor", "መኖር", "Verb"])
        writer.writerow(["Look",	"Mayet", "ማየት", "Verb"])
        writer.writerow(["Lose",	"Matfat", "ማጥፋት", "Verb"])
        writer.writerow(["Make",	"Mesrat", "መስራት", "Verb"])
        writer.writerow(["Need", "Mefeleg", "መፈለግ", "Verb"])
        writer.writerow(["Open",	"Mekfet", "መክፈት", "Verb"])
        writer.writerow(["Close",	"Mezgat", "መዝጋት", "Verb"])
        writer.writerow(["Organize",	"Maderajet", "ማጀራጀት", "Verb"])
        writer.writerow(["Pay",	"Mekfel", "መክፈል", "Verb"])
        writer.writerow(["Play",	"Mechawet", "መጫወት", "Verb"])
        writer.writerow(["Put",	"Maskemet", "ማስቀመጥ", "Verb"])
        writer.writerow(["Rain",	"Mezneb", "መዝነብ", "Verb"])
        writer.writerow(["Read",	"Manbeb", "ማንበብ", "Verb"])
        writer.writerow(["Reply",	"Memeles", "መመለስ", "Verb"])
        writer.writerow(["Run",	"Merott", "መሮጥ", "Verb"])
        writer.writerow(["Say",	"Malet", "ማለት", "Verb"])
        writer.writerow(["See",	"Mayet", "ማየት", "Verb"])
        writer.writerow(["Sell",	"Meshet", "መሸጥ", "Verb"])
        writer.writerow(["Send",	"Melak", "መላክ", "Verb"])
        writer.writerow(["Sign",	"Meferem", "መፈረም", "Verb"])
        writer.writerow(["Sing",	"Mezemer", "መዘመር", "Verb"])
        writer.writerow(["Sit",	"Mekemet", "መቀመጥ", "Verb"])
        writer.writerow(["Sleep",	"meteNat", "መተኛት", "Verb"])
        writer.writerow(["Smoke",	"Maches", "ማጨስ", "Verb"])
        writer.writerow(["Speak",	"Menager", "መናገር", "Verb"])
        writer.writerow(["Spend",	"Mawtat", "ማውጣት", "Verb"])
        writer.writerow(["Stand",	"Maqom", "መቆም", "Verb"])
        writer.writerow(["Start/Begin",	"Mejemer", "መጀመር", "Verb"])
        writer.writerow(["Study",	"Mattinat", "ማጥናት", "Verb"])
        writer.writerow(["Succeed",	"Mesakat", "መሳካት", "Verb"])
        writer.writerow(["Swim",	"Mewagnet", "መዋኘት", "Verb"])
        writer.writerow(["Take",	"Mewsed", "መውሰድ", "Verb"])
        writer.writerow(["Talk",	"Mawrat", "ማውራት", "Verb"])
        writer.writerow(["Teach",	"Mastemar", "ማስተማር", "Verb"])
        writer.writerow(["Tell",	"Menger", "መንገር", "Verb"])
        writer.writerow(["Think", "Maseb", "ማሰብ", "Verb"])
        writer.writerow(["Translate", "Metergom", "መተርጎም", "Verb"])
        writer.writerow(["Travel",	"Meguaz", "መጉዋዝ", "Verb"])
        writer.writerow(["Try",  "Memoker", "መሞከር", "Verb"])
        writer.writerow(["Turn Off",	"Matfat", "ማጥፋት", "Verb"])
        writer.writerow(["Turn On",	"Mabrat", "ማብራት", "Verb"])
        writer.writerow(["Understand", 	"Meredat", "መረዳት", "Verb"])
        writer.writerow(["Use",	"Metekem", "መጠቀም", "Verb"])
        writer.writerow(["Wait",	"Metebeq", "መጠበቅ", "Verb"])
        writer.writerow(["Wake Up", 	"Menqat", "መንቃት", "Verb"])
        writer.writerow(["Want",	"MemeNet", "መመኘት", "Verb"])
        writer.writerow(["Watch",	"Mayet", "ማየት", "Verb"])
        writer.writerow(["Work",	"Mesrat", "መስራት", "Verb"])
        writer.writerow(["Worry",	"Mechenek", "መጨነቅ", "Verb"])
        writer.writerow(["Write",	"Metsaf", "መጻፍ", "Verb"])


# createCSV()
