from flask import Blueprint, request, render_template
import requests
import json

api = Blueprint("ane", __name__)

@api.route('/', methods=['GET'])
def index():
    header = 'Menilek.Tech/ane'
    title = 'WELCOME TO THE PARTY'
    ip_endpoint = 'http://ip-api.com/json/'
    ip_data = requests.get(ip_endpoint)
    ip_payload = ip_data.json()
    city = ip_payload['city']
    isp = ip_payload['isp']
    ip = ip_payload['query']
    tz = ip_payload['timezone']
    return render_template('index.html', header=header, title=title, city=city, isp=isp, tz=tz, ip=ip)

@api.route('/api/ip', methods=['GET'])
def city():
    ip_endpoint = 'http://ip-api.com/json/'
    ip_data = requests.get(ip_endpoint)
    ip_payload = ip_data.json()
    city = ip_payload['city']
    isp = ip_payload['isp']
    ip = ip_payload['query']
    tz = ip_payload['timezone']
    ip_obj = {"city":city, "isp":isp, "ip":ip, "tz":tz}
    return ip_obj