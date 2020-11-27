from flask import Flask, render_template, redirect, url_for
from flask_cors import CORS, cross_origin
from api import api

app = Flask(__name__)
CORS(app, support_credentials=True)
app.register_blueprint(api, url_prefix="/ane")


@app.route('/', methods=['GET'])
@cross_origin(supports_credentials=True)
def home():
    return redirect(url_for('ane.index'))


if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)
