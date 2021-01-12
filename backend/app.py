import json
from init import *
from models import *
from api import *
from flask import Flask, render_template, redirect, url_for

app.register_blueprint(api)

@cross_origin(supports_credentials=True)

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)
