import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
// import App from "./App.tsx";
import App from './components/Form.tsx'
import { Toaster } from "sonner";
createRoot(document.getElementById("root") as HTMLElement).render(
	<StrictMode>
		<Toaster richColors closeButton  />
		<App />
	</StrictMode>,
);
