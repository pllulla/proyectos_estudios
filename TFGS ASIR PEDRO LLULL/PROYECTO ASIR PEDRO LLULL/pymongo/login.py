# -*- coding: utf-8 -*-
from flask import Flask, render_template, url_for, request, redirect, jsonify
from flask_pymongo import PyMongo,MongoClient


app = Flask(__name__)

client = MongoClient('mongodb://localhost:27017')
dbu = client.usuarios
dbp = client.peliculas


@app.route('/')
def index():

    return render_template('index.html')


@app.route('/login', methods=['POST'])
def login():
    users = dbu.users
    login_user = users.find_one({'name' : request.form['username']})

    if login_user:
        if request.form['pass'] == login_user['password'] and request.form['username'] == login_user['name']:
            return render_template('consulta.html')
        else:
            return render_template('error_2.html')

    elif request.form['username'] == '' or request.form['pass'] == '':
        return render_template('error_3.html')
    else:
    	return render_template('error_2.html')



@app.route('/register', methods=['POST','GET'])
def register():
    if request.method == 'POST':
        users = dbu.users
        existing_user = users.find_one({'name' : request.form['username']})

        if request.form['username'] == '' or request.form['pass'] == '':
            return render_template('error_3.html')

        elif existing_user is None:
            users.insert({'name' : request.form['username'], 'password' : request.form['pass']})
            return redirect(url_for('index'))
        
        elif existing_user:
            return render_template('error.html')

    return render_template('register.html')



@app.route('/consulta', methods=['POST'])
def consulta():
    users = dbu.users
    consulting_user = users.find_one({'name' : request.form['username']})

    if request.form['username'] == '':
        return render_template('error_3.html')

    elif consulting_user:
        usu = users.find_one({'name' : request.form['username']})
        return jsonify({'Nombre':usu['name'], 'Contraseña':usu['password']})



@app.route('/consulta2', methods=['POST'])
def consulta2():
    peli = dbp.marvel
    pe = peli.find_one({'titulo' : request.form['username']})

    if request.form['username'] == '':
        return 'El campo de consulta es requerido'

    elif pe:
        return jsonify({'Titulo':pe['titulo'], 'Año':pe['año'], 'Actores':pe['actores']})
        


if __name__ == '__main__':
    app.run(debug=True)