import React from "react";
import { createRoot } from "react-dom/client";
import App from "@/App"; // ✅ Already correct
import "@/styles/globals.css"; // Load base styles first
import "@/index.css"; // Local overrides/styles after globals

const container = document.getElementById("root");

if (!container) {
  throw new Error("Root container not found");
}

createRoot(container).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
