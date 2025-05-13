from flask import Flask, jsonify, send_from_directory, request
from flask_cors import CORS
from dotenv import load_dotenv
from pathlib import Path
import os

# ✅ Load environment variables
load_dotenv()

# ✅ Use absolute path to locate the correct 'dist' directory
# This points to /opt/render/project/server/dist, bypassing /src
PROJECT_ROOT = Path(__file__).resolve().parents[2]  # Go up 2 levels
DIST_DIR = PROJECT_ROOT / "server" / "dist"

# ✅ Initialize Flask app
app = Flask(__name__, static_folder=str(DIST_DIR), static_url_path='')
CORS(app)

# 🔁 Serve frontend files (React + Vite)
@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def serve_frontend(path):
    full_path = DIST_DIR / path

    # ✅ Debug logs
    print(f"📦 Requested path: {path}")
    print(f"📁 Resolved full path: {full_path}")
    print(f"📄 index.html exists? {DIST_DIR.joinpath('index.html').exists()}")

    if path != "" and full_path.exists():
        return send_from_directory(str(DIST_DIR), path)
    else:
        # Serve index.html as fallback for React Router
        return send_from_directory(str(DIST_DIR), 'index.html')

# ❗ Global error handler
@app.errorhandler(Exception)
def handle_error(error):
    status_code = getattr(error, 'code', 500)
    message = str(error) or "Internal Server Error"
    return jsonify({"success": False, "message": message}), status_code

# 🚀 Run the Flask app locally (not in production)
if __name__ == '__main__':
    port = int(os.environ.get("PORT", 5000))
    app.run(host='0.0.0.0', port=port, debug=False)
