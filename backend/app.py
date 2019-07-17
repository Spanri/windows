from models import Product, db, User, Contact
from views import MyAdminIndexView, MyModelView
from random import *
from flask import Flask, render_template, jsonify, json, request
from flask_admin import Admin, AdminIndexView, BaseView
from flask_admin.contrib.sqla import ModelView
import flask_login as login
from werkzeug.security import generate_password_hash, check_password_hash
import os
from flask_mail import Mail, Message
import yaml

app = Flask(__name__,
            static_folder = "../dist/static",
            template_folder = "../dist")

@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def catch_all(path):
    return render_template("index.html")


app.config.update(
    # SMTP сервер
   	MAIL_SERVER='smtp.gmail.com',
    MAIL_PORT=587,
    MAIL_USE_TLS=True,
    MAIL_USE_SSL=False,
   	MAIL_USERNAME='edmsmtuci@gmail.com',
   	MAIL_PASSWORD=os.environ['MAIL_PASSWORD_WINDOWS'],
    MAIL_DEFAULT_SENDER='edmsmtuci@gmail.com',
    # Другое
    SECRET_KEY=os.environ['SECRET_KEY_WINDOWS'],
    DEBUG=True,
    FLASK_ADMIN_SWATCH='cerulean',
    SQLALCHEMY_DATABASE_URI='postgresql://Spanri:'+os.environ['POSTGRESQL_WINDOWS']+'@localhost: 5432/windows'
)

mail = Mail(app)

POSTGRES = {
    'user': 'spanri',
    'pw': 'nysha2161',
    'db': 'windows',
    'host': 'localhost',
    'port': '5432',
}

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

admin.add_view(MyModelView(Contact, db.session, 'Контакты'))
admin.add_view(MyModelView(Product, db.session, 'Товары'))

db.init_app(app)
# test_user = User(login="test", password=generate_password_hash("test"))
# print('test_user', test_user.password)

if __name__ == '__main__':
    app.run()


@app.route("/api/mail", methods=['POST'])
def mailApi():
    try:
        data = json.loads(request.data)
        msg = Message("Обратная связь с сайта ЮСО, " +
            data['name']+" , "+data['email'], recipients=["kozlova9v@mail.ru"])
        msg.body = data['message']
        mail.send(msg)
        return 'Mail sent!'
    except Exception as e:
        print(str(e))
        return str(e)


@app.route('/api/random')
def random():
    response = {
        'randomNumber': randint(1, 100)
    }
    return jsonify(response)


@app.route('/api/feedback', methods=['GET'])
def feedback():
    try:
        f = FeedBack("")
        c = Contact.query.all()
        response = []
        for idx, val in enumerate(c):
            v = json.dumps(val.serialize(), ensure_ascii=False).encode('utf8')
            response.append(yaml.load(v, Loader=yaml.FullLoader))
        return jsonify(response)
    except Exception as e:
        return str(e)


@app.route('/api/contacts', methods=['GET'])
def contacts():
    try:
        c = Contact.query.all()
        response = []
        for idx, val in enumerate(c):
            v = json.dumps(val.serialize(), ensure_ascii=False).encode('utf8')
            response.append(yaml.load(v, Loader=yaml.FullLoader))
        return jsonify(response)
    except Exception as e:
        return str(e)


