import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/routes.jsx";
import { HelmetProvider } from "react-helmet-async";
import AuthProvider from "./providers/AuthProvider.jsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
const queryClient = new QueryClient();
createRoot(document.getElementById("root")).render(
	<StrictMode>
		{" "}
		<div>
			{" "}
			<AuthProvider>
				{" "}
				<QueryClientProvider client={queryClient}>
					{" "}
					<div className='max-w-screen-xl mx-auto'>
						<RouterProvider router={router}> </RouterProvider>
					</div>{" "}
					<App />
				</QueryClientProvider>
			</AuthProvider>
		</div>
	</StrictMode>
);
