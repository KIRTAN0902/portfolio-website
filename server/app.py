from flask import Flask, jsonify, send_from_directory, request
from flask_cors import CORS
from dotenv import load_dotenv
import os

# ✅ Load environment variables
load_dotenv()

# ✅ Initialize Flask app
app = Flask(__name__, static_folder='../server/dist', static_url_path='')
CORS(app)

# 🔁 Serve frontend files (production)
@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def serve_frontend(path):
    full_path = os.path.join(app.static_folder, path)
    if path != "" and os.path.exists(full_path):
        return send_from_directory(app.static_folder, path)
    else:
        # Serve index.html if the requested path doesn't exist
        return send_from_directory(app.static_folder, 'index.html')

# ❗ Global error handler (for catching unexpected errors)
@app.errorhandler(Exception)
def handle_error(error):
    status_code = getattr(error, 'code', 500)
    message = str(error) or "Internal Server Error"
    # More specific error handling could be added here
    return jsonify({"success": False, "message": message}), status_code

# 🚀 Entry point for Flask app
if __name__ == '__main__':
    port = int(os.environ.get("PORT", 5000))  # Set a fallback port
    app.run(host='0.0.0.0', port=port, debug=False)  # Turn off debug mode in production
