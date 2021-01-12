import json
from init import *
from models import *
from api import *
from flask import Flask, render_template, redirect, url_for

app.register_blueprint(api)

@app.route('/', methods=['GET'])
@cross_origin(supports_credentials=True)
def home():
    db_data = getEntries()
    print(db_data)
    response = app.response_class(
        response=json.dumps(db_data),
        status=200,
        mimetype='application/json'
    )
    return response


if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)
