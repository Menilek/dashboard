# from datetime import datetime as dt
from models import VisitRequest
from init import db

# def getDatetimeNow():
#     now = dt.now()
#     now = now.strftime('%d/%m/%Y-%H:%M:%S.%f')
#     return now

def handleError(data):
    # GRACEFULLY-IER CATCH ERROR
    db.session.rollback()
    db.session.add(data)
    db.session.flush()

def insertIntoDB(visitor):
    # PRINTING FOR DEBUGGING PURPOSES
    print('SAVING TO DB')
    # visit_time = getDatetimeNow()
    visit = VisitRequest(visitor['ip_address'], visitor['city'], visitor['internet_service_provider'], visitor['timezone'])
    try:
        db.session.add(visit)
        db.session.commit()
        db.session.close()
        return True
    except:
        return False
        # handleError(visit)

def getEntries():
    queryData = db.engine.execute("SELECT date_trunc('second', created_on), ip_address, city, internet_service_provider, timezone FROM visit_request ORDER BY id DESC LIMIT 10").first()
    return queryData