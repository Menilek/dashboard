from flask import Flask, render_template, redirect, url_for
from api import api

app = Flask(__name__)
app.register_blueprint(api)

@app.route('/', methods=['GET'])
def home():
    return redirect(url_for('ane.index'))

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)