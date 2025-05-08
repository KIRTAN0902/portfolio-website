import { createRoot } from "react-dom/client";
import App from "@/App"; // ✅ Updated to use alias for consistency
import "@/index.css"; // ✅ Updated to use alias
import "@/styles/globals.css"; // ✅ Updated to use alias

createRoot(document.getElementById("root")!).render(<App />);