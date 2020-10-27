from flask import Flask, render_template

app = Flask(__name__)

@app.route('/', methods=['GET'])
def home():
    title = 'HELLO WORLD'
    return render_template('index.html', title=title)

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)