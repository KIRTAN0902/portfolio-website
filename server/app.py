from flask import Flask, jsonify, send_from_directory, request
from flask_cors import CORS
from dotenv import load_dotenv
from pathlib import Path
import os

# ✅ Load env vars
load_dotenv()

# ✅ Correct path to dist folder (inside server/)
DIST_DIR = Path(__file__).resolve().parent / "dist"

# ✅ Initialize Flask
app = Flask(__name__, static_folder=str(DIST_DIR), static_url_path='')
CORS(app)

# ✅ Serve frontend
@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def serve_frontend(path):
    full_path = DIST_DIR / path

    print(f"📦 Requested path: {path}")
    print(f"📁 Resolved full path: {full_path}")
    print(f"📄 index.html exists? {(DIST_DIR / 'index.html').exists()}")

    if path != "" and full_path.exists():
        return send_from_directory(str(DIST_DIR), path)
    else:
        return send_from_directory(str(DIST_DIR), 'index.html')

# ✅ Error handler
@app.errorhandler(Exception)
def handle_error(error):
    status_code = getattr(error, 'code', 500)
    message = str(error) or "Internal Server Error"
    return jsonify({"success": False, "message": message}), status_code

# ✅ Dev run
if __name__ == '__main__':
    port = int(os.environ.get("PORT", 5000))
    app.run(host='0.0.0.0', port=port, debug=True)
