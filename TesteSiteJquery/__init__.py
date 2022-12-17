from flask import Flask

app = Flask(__name__)

app.config['SECRET_KEY'] = 'eeeb060fd0a76d4b1ef50e22109ab629'
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///comunidade.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

from TesteSiteJquery import routes