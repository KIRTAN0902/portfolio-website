# Kirtan's Portfolio

A full-stack developer portfolio built with React (Vite + Tailwind) and Flask.

## 🛠 Tech Stack
- Frontend: React, Vite, Tailwind CSS
- Backend: Python, Flask
- Deployment: Render

## 📁 Project Structure
my-portfolio-project/
├── client/                        # Frontend (Vite + React + Tailwind)
│   ├── public/                    # Static assets like images (e.g., MODEX.jpg)
│   ├── src/
│   │   ├── components/            # Organized into home/, layout/, ui/
│   │   ├── hooks/
│   │   ├── lib/
│   │   ├── pages/
│   │   ├── styles/
│   │   ├── App.tsx
│   │   └── main.tsx
│   ├── index.html                 # Vite entry HTML
│   ├── tailwind.config.ts
│   ├── package.json
│   └── vite.config.ts

├── server/                        # Backend (Flask)
│   ├── app.py                     # Flask entry point
│   ├── requirements.txt           # Backend dependencies
│   ├── render.yaml                # Render deployment config
│   └── dist/                      # Production build of frontend copied here


## 🚀 Deployment
Configured using `render.yaml` for automatic deployment on Render.
