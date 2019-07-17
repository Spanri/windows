from flask_sqlalchemy import SQLAlchemy
from sqlalchemy.orm import relationship

db = SQLAlchemy()

class Product(db.Model):
    __tablename__ = 'products'

    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(100), unique=True)
    description = db.Column(db.String(1000), nullable=True)
    price = db.Column(db.Integer)
    # category = relationship(
    #     "ProductCategory", backref="product", lazy=True)

    def __repr__(self):
        return '<id {}>'.format(self.id)

class ProductCategory(db.Model):
    __tablename__ = 'productcategoties'

    id = db.Column(db.Integer, primary_key=True)
    category = db.Column(db.String(200), unique=True)
    product_id = db.Column(db.Integer, db.ForeignKey('product.id'))

    def __repr__(self):
        return '<id {}>'.format(self.id)

class Contact(db.Model):
    __tablename__ = 'contacts'

    id = db.Column(db.Integer, primary_key=True)
    parameter = db.Column(db.String(100), unique=True)
    description = db.Column(db.String(1000), nullable=True)

    def __repr__(self):
        return '<id {}>'.format(self.id)

class User(db.Model):
    __tablename__ = 'users'

    id = db.Column(db.Integer, primary_key=True)
    login = db.Column(db.String(255), unique=True)
    password = db.Column(db.String(255))

    def __repr__(self):
        return '<id {}>'.format(self.id)
        
    @property
    def is_authenticated(self):
        return True

    @property
    def is_active(self):
        return True

    @property
    def is_anonymous(self):
        return False

    def get_id(self):
        return self.id

    # Required for administrative interface
    def __unicode__(self):
        return self.username
