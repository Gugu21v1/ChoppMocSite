from flask import render_template
from TesteSiteJquery import app


@app.route('/')
# serve pra criar os caminhos do site ('/Gustavo/posts')
def home():
    return render_template("inicio.html")
