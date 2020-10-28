from flask import Blueprint, request, render_template

api = Blueprint("ane", __name__)

@api.route('/', methods=['GET'])
def index():
    header = 'Menilek.Tech/ane'
    title = 'WELCOME TO THE PARTY'
    return render_template('index.html', header=header, title=title)