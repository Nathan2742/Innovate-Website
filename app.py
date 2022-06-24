from flask import Flask, Blueprint
from flask import Blueprint
from views import views



app = Flask(__name__)

app.register_blueprint(views)

# we make "appp" object from flask
if __name__ == "__main__":
    app.run(debug=True, port=8000)

# this is what we neeed to make a flask application run !!