from flask import Flask, render_template, session, request
from flask_pymongo import PyMongo
from bson.objectid import ObjectId
import os
import json

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
    user = request.remote_addr
    views = mongo.db.views.find_one(
        {'_id': ObjectId("5c319cd0fb6fc0600bd9fe89")}, {"views"})

    count = ""
    for key, value in views.items():
        if key != "_id":
            count = value

    if 'guest' not in session:
        if user != "127.0.0.1":

            mongo.db.views.update_one({'_id': ObjectId("5c319cd0fb6fc0600bd9fe89")}, {
                "$set": {"views": count + 1}})
            mongo.db.views.update_one({'_id': ObjectId("5c319cd0fb6fc0600bd9fe89")}, {
                "$push": {"users": user}}, upsert=True)
            session['guest'] = True

    return render_template('index.html', skills=skills,
                           history=history,
                           education=education,
                           projects=projects,
                           views=views)


if __name__ == '__main__':
    app.run(host=os.environ.get('IP'), port=os.environ.get('PORT'), debug=True)
