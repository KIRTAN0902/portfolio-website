from flask import Flask, jsonify, send_from_directory, request
from flask_cors import CORS
from dotenv import load_dotenv
from pathlib import Path
import os

# ✅ Load environment variables
load_dotenv()

# ✅ Resolve absolute path to 'dist' directory
DIST_DIR = Path(__file__).resolve().parent / "dist"

# ✅ Initialize Flask app
app = Flask(__name__, static_folder=str(DIST_DIR), static_url_path='')
CORS(app)

# 🔁 Serve frontend files (production)
@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def serve_frontend(path):
    full_path = DIST_DIR / path
    if path != "" and full_path.exists():
        return send_from_directory(str(DIST_DIR), path)
    else:
        # Serve index.html if the requested path doesn't exist
        return send_from_directory(str(DIST_DIR), 'index.html')

# ❗ Global error handler (for catching unexpected errors)
@app.errorhandler(Exception)
def handle_error(error):
    status_code = getattr(error, 'code', 500)
    message = str(error) or "Internal Server Error"
    return jsonify({"success": False, "message": message}), status_code

# 🚀 Entry point for Flask app
if __name__ == '__main__':
    port = int(os.environ.get("PORT", 5000))  # Fallback port
    app.run(host='0.0.0.0', port=port, debug=False)  # Debug off for production
