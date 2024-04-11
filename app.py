from flask import Flask
from flask import Flask, request, render_template
from config import DevConfig

app = Flask(__name__)
app.config.from_object(DevConfig)


@app.route('/register')
def register():
        return "hello"


@app.route('/login')
def login():
        return "hello"


if __name__ == '__main__':
    app.run(debug=True)
