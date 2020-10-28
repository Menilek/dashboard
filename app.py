from flask import Flask, render_template
from api import api

app = Flask(__name__)
app.register_blueprint(api, url_prefix="/ane")

@app.route('/', methods=['GET'])
def home():
    header = 'HOME PAGE'
    title = 'HELLO WORLD'
    return render_template('index.html', header=header, title=title)

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)