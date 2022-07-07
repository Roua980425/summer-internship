import numpy as np
from PIL import Image
from feature_extractor import FeatureExtractor
from datetime import datetime
from flask import Flask, request, render_template, jsonify
from flask import send_file, send_from_directory, safe_join, abort
from pathlib import Path
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import UniqueConstraint
from flask_cors import CORS, cross_origin
import json
import io
from base64 import encodebytes
import base64


app = Flask(__name__)
app.config["SQLALCHEMY_DATABASE_URI"]='sqlite:///example.db'
CORS(app)
db=SQLAlchemy(app)


class Todo(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    content = db.Column(db.Text, nullable=False)

    def __str__(self):
        return f'{self.id} {self.content}'

class Product(db.Model):
    id=db.Column(db.Integer,primary_key=True, autoincrement=False)
    title = db.Column(db.String(200))
    Image=db.Column(db.String(200))

    def __repr__(self):
        return f"Product('{self.Image}')"



class ProductUser(db.Model):
    id=db.Column(db.Integer,primary_key=True)
    user_id = db.Column(db.Integer)
    Product_id=db.Column(db.Integer)

    UniqueConstraint('user_id', 'product_id', name='user_product_unique')




fe = FeatureExtractor()
features = []
img_paths = []
for feature_path in Path("./static/feature").glob("*.npy"):
    features.append(np.load(feature_path))
    img_paths.append(Path("./static/img") / (feature_path.stem + ".jpg"))
features = np.array(features)
def get_response_image(image_path):
    pil_img = Image.open(image_path, mode='r') # reads the PIL image
    byte_arr = io.BytesIO()
    pil_img.save(byte_arr, format='PNG') # convert the PIL image to byte array
    encoded_img = encodebytes(byte_arr.getvalue()).decode('ascii') # encode as base64
    return encoded_img

def get_encoded_img(image_path):
    img = Image.open(image_path, mode='r')
    img_byte_arr = io.BytesIO()
    img.save(img_byte_arr, format='JPEG')
    my_encoded_img = base64.encodebytes(img_byte_arr.getvalue()).decode('ascii')
    return my_encoded_img

@app.route('/api', methods=['POST'])
#@app.route('/api', methods=['GET'])
def api():
    data = request.get_json()
    print(data)
    return data

@app.route('/api/upload', methods=['POST'])
def handle_form():
    files = request.files
    file = files.get('file')
    """
      CODE TO HANDLE FILE
    """
    # Save query image
    img = Image.open(file.stream)  # PIL image
    uploaded_img_path = "static/uploaded/" + datetime.now().isoformat().replace(":", ".") + "_" + file.filename
    img.save(uploaded_img_path)

    # Run search
    query = fe.extract(img)
    dists = np.linalg.norm(features-query, axis=1)  # L2 distances to features
    ids = np.argsort(dists)[:8]  # Top 30 results
    scores = [(img_paths[id]) for id in ids]
  
    return jsonify({"image_query": str(uploaded_img_path),
     "image_url": str(scores[0]), "image_url1": str(scores[1]),
     "image_url2": str(scores[2]),"image_url3": str(scores[3]),
     "image_url4": str(scores[4]),"image_url5": str(scores[5]),
     "image_url6": str(scores[6]),"image_url7": str(scores[7])}), 200

if __name__=="__main__":
    app.run(debug=True)

