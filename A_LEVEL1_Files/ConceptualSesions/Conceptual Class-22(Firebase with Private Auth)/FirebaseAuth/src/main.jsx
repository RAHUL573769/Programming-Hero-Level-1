import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/routes.jsx";
import FirebaseProvider from "./FirebaseProvider/FirebaseProvider.jsx";

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<FirebaseProvider>
			{" "}
			<RouterProvider router={router}>
				{" "}
				<App />
			</RouterProvider>
		</FirebaseProvider>
	</StrictMode>
);
