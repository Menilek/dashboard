from flask import Blueprint, request, render_template
import requests
import json
from ip_functions import *

api = Blueprint("ane", __name__)

# git config --local user.name "Menilek"
# git config --local user.email "menilek25@hotmail.co.uk"
# https://superuser.com/questions/1064197/how-to-switch-git-user-at-terminal

@api.route('/', methods=['GET'])
def index():
    # RETURN 10 DB ENTRIES
    db_data = getEntries()
    print(db_data)
    # header = 'Menilek.Tech/ane'
    # title = 'WELCOME TO THE PARTY'
    # ip_endpoint = 'http://ip-api.com/json/'
    # ip_data = requests.get(ip_endpoint)
    # ip_payload = ip_data.json()
    # city = ip_payload['city']
    # isp = ip_payload['isp']
    # ip = ip_payload['query']
    # tz = ip_payload['timezone']
    # return render_template('index.html', header=header, title=title, city=city, isp=isp, tz=tz, ip=ip)

@api.route('/api/visit', methods=['POST'])
def visit():
    # ADD ENTRY TO DB
    # JUST TO BE SAFE
    if request.method == 'POST':
        # PRINT FOR DEBUGGING PURPOSES
        print('ABOUT TO SAVE TO DB')
        visit_data = request.json
        res = insertIntoDB(visit_data)
        if res == True:
            return {
                'statusCode': 200
            }
        else:
            return {
                'statusCode': 500
            }

# EXAMPLE REQUEST BODY
# {
#     "ip_address":"77.96.24.46",
#     "city": "Birmingham",
#     "internet_service_provider": "Virgin Media",
#     "timezone": "Europe/London"
# }

@api.route('/api/visitor', methods=['GET'])
def visitor():
    ip_endpoint = 'http://ip-api.com/json/'
    ip_data = requests.get(ip_endpoint)
    ip_payload = ip_data.json()
    city = ip_payload['city']
    isp = ip_payload['isp']
    ip = ip_payload['query']
    tz = ip_payload['timezone']
    ip_obj = {"city": city, "isp": isp, "ip": ip, "tz": tz}
    return ip_obj


@api.route('/api/city', methods=['GET'])
def city():
    endpoint = 'http://ip-api.com/json/?fields=city'
    city_data = requests.get(endpoint)
    city = city_data.json()
    return city


@api.route('/api/ip', methods=['GET'])
def ip_address():
    endpoint = 'http://ip-api.com/json/?fields=query'
    ip_data = requests.get(endpoint)
    ip_address = ip_data.json()
    return ip_address


@api.route('/api/isp', methods=['GET'])
def isp():
    endpoint = 'http://ip-api.com/json/?fields=isp'
    isp_data = requests.get(endpoint)
    isp = isp_data.json()
    return isp


@api.route('/api/timezone', methods=['GET'])
def timezone():
    endpoint = 'http://ip-api.com/json/?fields=timezone'
    timezone_data = requests.get(endpoint)
    timezone = timezone_data.json()
    return timezone


@api.route('/api/docs', methods=['GET'])
def get_docs():
    print('Retrieving docs')
    return render_template('swaggerUI.html')
