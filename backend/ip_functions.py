from datetime import datetime as dt
from models import VisitRequest
from init import db

# def getDatetimeNow():
#     now = dt.now()
#     now = now.strftime('%d/%m/%Y-%H:%M:%S.%f')
#     return now


def handleError(data):
    db.session.rollback()
    db.session.flush()
    return False


def insertIntoDB(visitor):
    print('SAVING TO DB')
    # visit_time = getDatetimeNow()
    visit = VisitRequest(visitor['ip_address'], visitor['city'],
                         visitor['internet_service_provider'], visitor['timezone'])
    try:
        db.session.add(visit)
        db.session.commit()
        db.session.close()
        return True
    except:
        handleError(visit)


def parseRow(row):
    visit_request = {'date': row[0].strftime('%d/%m/%Y'), 'time': row[0].strftime(
        '%H:%M:%S'), 'ip_address': row[1], 'city': row[2], 'internet_service_provider': row[3], 'timezone': row[4]}
    return visit_request


def getEntries():
    queryData = db.engine.execute(
        "SELECT date_trunc('second', created_on), ip_address, city, internet_service_provider, timezone FROM visit_request ORDER BY id DESC LIMIT 10")
    entries = []
    for data in queryData:
        visit = parseRow(data)
        entries.append(visit)
    return str(entries)
