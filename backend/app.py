from init import *
from models import *
from api import api
from flask import Flask, render_template, redirect, url_for

app.register_blueprint(api)

@app.route('/', methods=['GET'])
@cross_origin(supports_credentials=True)
def home():
    return redirect(url_for('ane.index'))


if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)
