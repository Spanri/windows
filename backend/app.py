from models import Product, db, User
from views import MyAdminIndexView, MyModelView
from random import *
from flask import Flask, render_template, jsonify
from flask_admin import Admin, AdminIndexView, BaseView
from flask_admin.contrib.sqla import ModelView
import flask_login as login
from werkzeug.security import generate_password_hash, check_password_hash
import os

app = Flask(__name__,
            static_folder = "../dist/static",
            template_folder = "../dist")

@app.route('/api/random')
def random_number():
    response = {
        'randomNumber': randint(1, 100)
    }
    return jsonify(response)

@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def catch_all(path):
    return render_template("index.html")

app.config['SECRET_KEY'] = '123456790'
app.config['DEBUG'] = True
app.config['FLASK_ADMIN_SWATCH'] = 'cerulean'
POSTGRES = {
    'user': 'spanri',
    'pw': 'nysha2161',
    'db': 'windows',
    'host': 'localhost',
    'port': '5432',
}
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://Spanri:nysha2161@localhost:5432/windows'

# Initialize flask-login
def init_login():
    login_manager = login.LoginManager()
    login_manager.init_app(app)

    # Create user loader function
    @login_manager.user_loader
    def load_user(user_id):
        return db.session.query(User).get(user_id)

# Initialize flask-login
init_login()

admin = Admin(
    app, 
    name='Юг Строй Окно',
    index_view=MyAdminIndexView(),
    base_template='home.html'
)

admin.add_view(MyModelView(Product, db.session, 'Товары'))

db.init_app(app)
# test_user = User(login="test", password=generate_password_hash("test"))
# print('test_user', test_user.password)

if __name__ == '__main__':
    app.run()


