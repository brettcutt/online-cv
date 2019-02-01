from flask import Flask, render_template, session, request
from flask_pymongo import PyMongo
from bson.objectid import ObjectId
import os
import json
import pytz
from datetime import date, datetime

app = Flask(__name__)

if os.environ.get('ENVIRONMENT'):
    import env
    app.secret_key = env.DB_CONFIG['SECRET_KEY']
    app.config["MONGO_DBNAME"] = env.DB_CONFIG['MONGO_DBNAME']
    app.config["MONGO_URI"] = env.DB_CONFIG['MONGO_URI']
    print("development")
else:
    app.secret_key = os.environ.get('SECRET_KEY')
    app.config["MONGO_DBNAME"] = os.environ.get('MONGO_DBNAME')
    app.config["MONGO_URI"] = os.environ.get('MONGO_URI')

mongo = PyMongo(app)

with open("data/skills.json", 'r') as file:
    skills = json.load(file)

with open("data/history.json", 'r', encoding='utf8') as file:
    history = json.load(file)

with open("data/education.json", 'r') as file:
    education = json.load(file)

with open("data/projects.json", 'r') as file:
    projects = json.load(file)


@app.route('/')
def index():
    local_time = pytz.timezone('Australia/Adelaide')
    adelaide_now = str(datetime.now(local_time).strftime('%H:%M:%S %d-%m-%Y '))
    user = request.remote_addr
    user = user.replace('.', "")

    views = mongo.db.views.find_one(
        {'_id': ObjectId("5c319cd0fb6fc0600bd9fe89")})

    count = ""
    for key, value in views.items():
        if key == "views":
            count = value

    update_view = mongo.db.views.update_one({'_id': ObjectId("5c319cd0fb6fc0600bd9fe89")}, {
        "$set": {"views": count + 1}}, upsert=True)

    record_exists = False
    try:
        for item in views['users']:
            for item2 in item:
                if item2:
                    record_exists = True
    except:
        print("new user")

    if 'guest' not in session:
        if user != "127001":
            if record_exists:
                update_view

                mongo.db.views.update_one({'_id': ObjectId("5c319cd0fb6fc0600bd9fe89")}, {
                    "$push": {"users.$[]."+user+".Time": adelaide_now}})
                session['guest'] = True

            else:
                update_view
                mongo.db.views.update_one({'_id': ObjectId("5c319cd0fb6fc0600bd9fe89")}, {
                    "$push": {"users": {user: {"Time": [adelaide_now]}}}}, upsert=True)
                session['guest'] = True
    else:
        print('in session')

    return render_template('index.html', skills=skills,
                           history=history,
                           education=education,
                           projects=projects,
                           views=views)


if __name__ == '__main__':
    app.run(host=os.environ.get('IP'),
            port=os.environ.get('PORT'), debug=False)
