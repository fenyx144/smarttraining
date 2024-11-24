import os
from flask import Flask, request, jsonify

app = Flask(__name__)

@app.route('/')
def home():
    return "¡Servidor Flask funcionando en Heroku!"

if __name__ == '__main__':
    port = int(os.environ.get("PORT", 5000))  # Usa el puerto asignado por Heroku
    app.run(host='0.0.0.0', port=port)
