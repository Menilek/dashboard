import json
from init import *
from models import *
from api import *
from flask import Flask

app.register_blueprint(api)

@app.route('/', methods=['GET'])
@cross_origin(supports_credentials=True)
def home():
    response = app.response_class(
        response="Nothing to see here",
        status=200,
        mimetype='application/text'
    )
    return response


if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)
