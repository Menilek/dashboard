from flask import Blueprint, request, render_template, Response
import requests
import json
from ip_functions import *

api = Blueprint("ane", __name__)


@api.route('/api/visitors', methods=['GET'])
def index():
    db_data = getEntries()
    res = Response(response=db_data, status=200, mimetype="application/json")
    res.headers["Content-Type"] = "application/json"
    return res


@api.route('/api/visit', methods=['POST'])
def visit():
    if request.method == 'POST':
        visit_data = request.json
        res = insertIntoDB(visit_data)
        if res == True:
            return {
                'statusCode': 200
            }
        else:
            return {
                'statusCode': 304
            }

# EXAMPLE REQUEST BODY
# {
#     "ip_address":"77.96.24.46",
#     "city": "Birmingham",
#     "internet_service_provider": "Virgin Media",
#     "timezone": "Europe/London"
# }


@api.route('/api/docs', methods=['GET'])
def get_docs():
    print('Retrieving docs')
    return render_template('swaggerUI.html')
