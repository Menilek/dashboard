# from flask_sqlalchemy import SQLAlchemy
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy import Column, Integer, String, Date
from datetime import datetime
from init import db


class VisitRequest(db.Model):

    id = db.Column(db.Integer, primary_key=True)
    ip_address = db.Column(db.String(), unique=True)
    city = db.Column(db.String())
    internet_service_provider = db.Column(db.String())
    timezone = db.Column(db.String())
    created_on = db.Column(db.DateTime, default=datetime.now, index=True)

    def __init__(self, ip_address, city, internet_service_provider, timezone, created_on=None):
        self.ip_address = ip_address
        self.city = city
        self.internet_service_provider = internet_service_provider
        self.timezone = timezone

    def __repr__(self):
        return f"<VisitRequest {self.ip_address}, {self.city}, {self.internet_service_provider}, {self.timezone}, {self.created_on}>"
