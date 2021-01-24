import os
from os.path import join, dirname
from dotenv import load_dotenv
from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS, cross_origin

dotenv_path = join(dirname(__file__), '.env')
load_dotenv(dotenv_path)

USERNAME = os.environ.get("USERNAME")
PASSWORD = os.environ.get("PASSWORD")
HOSTNAME = os.environ.get("POSTGRES_HOSTNAME")
PORT = os.environ.get("POSTGRES_PORT")
DATABASE = os.environ.get("APPLICATION_DB")

SQLALCHEMY_DATABASE_URI = 'postgres+psycopg2://' + USERNAME + ':' + PASSWORD + '@' + HOSTNAME + ':' + PORT + '/' + DATABASE

app = Flask(__name__)
CORS(app, support_credentials=True)
app.config['SQLALCHEMY_DATABASE_URI'] = SQLALCHEMY_DATABASE_URI
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db = SQLAlchemy(app)

