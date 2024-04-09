import flask
from flask_pymongo import PyMongo
from flask import Flask, request, render_template

app = Flask(__name__)

@app.route('/register', methods=['GET', 'POST'])
def register():
    if request.method == 'POST':
        # Process the registration form data here
        return render_template("login.jsx")  # Assuming your register template is in HTML format
    else:
        return render_template("register.jsx")  # Render the registration form

@app.route('/login', methods=['GET', 'POST'])
def login():
    if request.method == 'POST':
        # Process the login form data here
        n = request.form.get('username')
        em = request.form.get('email')
        p = request.form.get('password')
        return render_template("login.jsx", username=n, email=em, password=p)  # Assuming your login template is in HTML format
    else:
        return render_template("login.html")  # Render the login form

if __name__ == '__main__':
    app.run(debug=True)
