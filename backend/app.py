import datetime
from models import Product, db, User, Contact, ProductCategory
from views import MyAdminIndexView, MyModelView, ImageView
import os
import os.path as op
import yaml
from random import *
from werkzeug.security import generate_password_hash, check_password_hash
from flask import Flask, render_template, jsonify, json, request, url_for, redirect
from flask_admin import Admin, AdminIndexView, BaseView
from flask_admin.contrib.sqla import ModelView
from flask_mail import Mail, Message
from flask_cors import CORS
import flask_login as login
from ftp import ftp

from wtforms import fields, widgets
from sqlalchemy.event import listens_for

# Create directory for file fields to use
file_path = op.join(op.dirname(__file__), './dist/static')
try:
    os.mkdir(file_path)
except OSError:
    pass

app = Flask(__name__,
            static_folder = "./dist/static",
            template_folder = "./dist")

CORS(app)

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
    SQLALCHEMY_DATABASE_URI=os.environ['DATABASE_URL'],
    UPLOAD_FOLDER='/'
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
admin.add_view(MyModelView(ProductCategory, db.session, 'Категории'))
admin.add_view(ImageView(Product, db.session, 'Товары'))

db.init_app(app)

if __name__ == '__main__':
    app.run()


@listens_for(Product, 'after_delete')
def del_image(mapper, connection, target):
    if target.path:
        # Delete image
        try:
            os.remove(op.join(file_path, target.path))
        except OSError:
            pass

        # Delete thumbnail
        try:
            os.remove(op.join(file_path,
                              form.thumbgen_filename(target.path)))
        except OSError:
            pass

@app.route("/api/mail", methods=['POST'])
def mailApi():
    try:
        data = json.loads(request.data)
        msg = Message("Обратная связь с сайта ЮСО, " +
            data['name']+", "+data['email'], recipients=[data['email_where']])
        msg.body = data['message']
        mail.send(msg)
        return 'Mail sent!'
    except Exception as e:
        return str(e)


@app.route('/api/cart', methods=['POST'])
def cart():
    try:
        data = json.loads(request.data)
        time = str(datetime.datetime.now())
        msg = Message("У вас сделали заказ, " + time, recipients=[data['email_where']])
        cart = ''
        for el in data['cart']:
            cart += (
                "Товар: " + el['title'] + 
                "Категория: " + str(el['category']) +
                "\nЦена: " + str(el['price']) +
                "\nКоличество: " + str(el['quantity']) +
                "\nСтоимость : " + str(el['price'] * el['quantity']) +
                "\n\n"
            )
        print(data['cart2'])
        for el in data['cart2']:
            cart += (
                "Товар: Окно на заказ " + el['formFactor'] + ", " + el['width'] + '*' + el['height'] + ", подоконник " + el['windowSill'] +
                ", отлив " + el['tint'] + ", ламинация " + el['lamination'] +
                "\nЦена: " + str(el['price']) +
                "\nКоличество: " + str(el['quantity']) +
                "\nСтоимость : " + str(el['price'] * el['quantity']) +
                "\n\n"
            )
            print(cart)
        
        message = (
            "Имя: " + data['name'] +
            "\nEmail: " + data['email'] +
            "\nТелефон: " + data['phone'] +
            "\nАдрес: " + data['address'] +
            "\n\n" + cart +
            "Всего: " + str(data['total'])
        )
        msg.body = message
        mail.send(msg)

        msg = Message("Вы сделали заказ, " + time, recipients=[data['email']])
        msg.body = message
        mail.send(msg)
        return 'Mail sent!'
    except Exception as e:
        return str(e)

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

@app.route('/api/product', methods=['POST'])
def product():
    try:
        data = json.loads(request.data)
        p = Product.query.filter_by(id=data['id']).first()
        res = json.dumps(p.serialize(), ensure_ascii=False).encode('utf8')
        return jsonify(yaml.load(res, Loader=yaml.FullLoader))
    except Exception as e:
        return str(e)

@app.route('/api/products', methods=['GET'])
def products():
    try:
        p = Product.query.all()
        response = []
        for idx, val in enumerate(p):
            v = json.dumps(val.serialize(), ensure_ascii=False).encode('utf8')
            response.append(yaml.load(v, Loader=yaml.FullLoader))
        return jsonify(response)
    except Exception as e:
        return str(e)


@app.route('/api/productCategories', methods=['GET'])
def productCategories():
    try:
        p = ProductCategory.query.all()
        response = []
        for idx, val in enumerate(p):
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


