from flask_admin.contrib import sqla
from flask_admin import Admin, AdminIndexView, BaseView, expose
from models import db, User
from wtforms import form, fields, validators
from werkzeug.security import generate_password_hash, check_password_hash
import flask_admin as admin
import flask_login as login

def logged_in():
    # в сессии будет храниться информация о том, что пользователь вошёл
    return session.get('logged')

# от этого класса должны наследоваться все классы админки - кроме индекса

class MyView(BaseView):
    def is_accessible(self):
        return logged_in()

    def _handle_view(self, name, **kwargs):
        if not logged_in():
            # делать редирект в некоторых случаях не стоит
            return self.render('admin/login.html')

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
            return redirect(url_for('.index'))
        link = '<p>Don\'t have an account? <a href="' + url_for('.register_view') + '">Click here to register.</a></p>'
        self._template_args['form'] = form
        self._template_args['link'] = link
        return super(MyAdminIndexView, self).index()

    @expose('/register/', methods=('GET', 'POST'))
    def register_view(self):
        form = RegistrationForm(request.form)
        if helpers.validate_form_on_submit(form):
            user = User()

            form.populate_obj(user)
            # we hash the users password to avoid saving it as plaintext in the db,
            # remove to use plain text:
            user.password = generate_password_hash(form.password.data)

            db.session.add(user)
            db.session.commit()

            login.login_user(user)
            return redirect(url_for('.index'))
        link = '<p>Already have an account? <a href="' + url_for('.login_view') + '">Click here to log in.</a></p>'
        self._template_args['form'] = form
        self._template_args['link'] = link
        return super(MyAdminIndexView, self).index()

    @expose('/logout/')
    def logout_view(self):
        login.logout_user()
        return redirect(url_for('.index'))

class AdminIndex(AdminIndexView):
    @expose('/', methods=['GET', 'POST'])
    def index(self):
        if request.method == 'POST':
            frm = request.form.get
            login = frm('login')
            password = frm('pass')

            # проверяете введённые данные...
            if login=='spanri':
                session.update({login:'spanri2'})
                session.modified = True
                return self.render('admin/index.html')
            else:
                return self.render(
                    'admin/login.html',
                    error=u'Ошиблись паролем?..'
                )
        # уже вошёл, но перешёл на /admin/
        if logged_in():
            return self.render('admin/index.html')
        return self.render('admin/login.html')

# Define login and registration forms (for flask-login)
class LoginForm(form.Form):
    login = fields.StringField(validators=[validators.required()])
    password = fields.PasswordField(validators=[validators.required()])

    def validate_login(self, field):
        user = self.get_user()

        if user is None:
            raise validators.ValidationError('Invalid user')

        # we're comparing the plaintext pw with the the hash from the db
        if not check_password_hash(user.password, self.password.data):
            # to compare plain text passwords use
            # if user.password != self.password.data:
            raise validators.ValidationError('Invalid password')

    def get_user(self):
        return db.session.query(User).filter_by(login=self.login.data).first()


class RegistrationForm(form.Form):
    login = fields.StringField(validators=[validators.required()])
    email = fields.StringField()
    password = fields.PasswordField(validators=[validators.required()])

    def validate_login(self, field):
        if db.session.query(User).filter_by(login=self.login.data).count() > 0:
            raise validators.ValidationError('Duplicate username')
