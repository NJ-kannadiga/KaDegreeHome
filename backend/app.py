from flask import Flask
from flask_cors import CORS
from models import db
import os
from dotenv import load_dotenv

load_dotenv()

app = Flask(__name__)
CORS(app)

# Check for DATABASE_URL, warn if default
db_url = os.getenv('DATABASE_URL')
if not db_url:
    print("WARNING: DATABASE_URL not set in .env using default postgres://postgres:postgres@localhost:5432/kadegree")
app.config['SQLALCHEMY_DATABASE_URI'] = db_url or 'postgresql://postgres:postgres@localhost:5432/kadegree'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db.init_app(app)

# Import routes after app initialization to avoid circular imports
from routes import api_bp
app.register_blueprint(api_bp, url_prefix='/api')

if __name__ == '__main__':
    with app.app_context():
        try:
            db.create_all()
            print("Database tables created successfully.")
        except Exception as e:
            print(f"Error creating database tables: {e}")
    app.run(debug=True, port=5000)
