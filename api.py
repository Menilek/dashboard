from flask import Blueprint, request, render_template
import requests
import json

api = Blueprint("ane", __name__)

@api.route('/ane', methods=['GET'])
def index():
    header = 'Menilek.Tech/ane'
    title = 'WELCOME TO THE PARTY'
    return render_template('index.html', header=header, title=title)

@api.route('/ane/ip', methods=['GET'])
def ip():
    ip_endpoint = 'http://ip-api.com/json/'
    ip_data = requests.get(ip_endpoint)
    return ip_data.json()
