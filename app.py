from flask import Flask, render_template

import os
import json
#import env

app = Flask(__name__)
app.secret_key = os.environ.get('SECRET_KEY')

with open("data/skills.json", 'r') as file:
    skills = json.load(file)

with open("data/history.json", 'r', encoding='utf8') as file:
    history = json.load(file)

with open("data/projects.json", 'r') as file:
    projects = json.load(file)

@app.route('/')
def index():
    return render_template('index.html', skills=skills,
                                         history=history,
                                         projects=projects)



if __name__ == '__main__':
    app.run(host=os.environ.get('IP'), port=os.environ.get('PORT'), debug=True)