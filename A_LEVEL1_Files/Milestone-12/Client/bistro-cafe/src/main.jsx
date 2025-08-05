import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/routes.jsx";
import { HelmetProvider } from "react-helmet-async";
import AuthProvider from "./providers/AuthProvider.jsx";

createRoot(document.getElementById("root")).render(
	<StrictMode>
		{" "}
		<div className='max-w-screen-xl mx-auto'>
			<AuthProvider>
				{" "}
				<RouterProvider router={router}>
					{" "}
					<App />
				</RouterProvider>
			</AuthProvider>
		</div>
	</StrictMode>
);
