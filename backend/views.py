from flask_admin.contrib import sqla
from flask_admin import Admin, AdminIndexView, BaseView, expose, helpers, form as form_admin
from flask import Flask, url_for, redirect, render_template, request, jsonify, json
from models import db, User, Product, Contact
from wtforms import form, fields, validators
from werkzeug.security import generate_password_hash, check_password_hash
import flask_admin as admin
import flask_login as login
import os.path as op
from jinja2 import Markup

def logged_in():
    # в сессии будет храниться информация о том, что пользователь вошёл
    return session.get('logged')

# Create customized model view class
class MyModelView(sqla.ModelView):
    def is_accessible(self):
        return login.current_user.is_authenticated

# Create customized index view class that handles login & registration
class MyAdminIndexView(AdminIndexView):
    @expose('/')
    def index(self):
        if not login.current_user.is_authenticated:
            return redirect(url_for('.login_view'))
        return super(MyAdminIndexView, self).index()

    @expose('/login/', methods=('GET', 'POST'))
    def login_view(self):
        # handle user login
        form = LoginForm(request.form)
        if helpers.validate_form_on_submit(form):
            user = form.get_user()
            login.login_user(user)

        if login.current_user.is_authenticated:
            print('dfdf')
            return redirect(url_for('.index'))
        self._template_args['form'] = form
        return super(MyAdminIndexView, self).index()

    @expose('/logout/')
    def logout_view(self):
        login.logout_user()
        return redirect(url_for('.index'))

# Define login and registration forms (for flask-login)
class LoginForm(form.Form):
    login = fields.StringField(validators=[validators.required()])
    password = fields.PasswordField(validators=[validators.required()])

    def validate_login(self, field):
        user = self.get_user()

        if user is None:
            raise validators.ValidationError('Неправильный логин.')

        # we're comparing the plaintext pw with the the hash from the db
        if not check_password_hash(user.password, self.password.data):
            print(check_password_hash(user.password, self.password.data))
            print(user.password, self.password.data)
            # to compare plain text passwords use
        # if user.password != self.password.data:
            raise validators.ValidationError('Неправильный пароль.')

    def get_user(self):
        return db.session.query(User).filter_by(login=self.login.data).first()


class ImageView(sqla.ModelView):
    def _list_thumbnail(view, context, model, name):
        if not model.img:
            return ''
        return Markup('<img src="%s">' 
                      % url_for('static',
            filename=form_admin.thumbgen_filename(model.img)))
    
    column_formatters = {
        'img': _list_thumbnail
    }

    form_extra_fields = {
        'img': form_admin.ImageUploadField('Image',
                                            base_path=op.join(
                                                op.dirname(__file__), './dist/static'),
                                      thumbnail_size=(100, 100, True))
    }
