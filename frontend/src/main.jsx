import React, { lazy, Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ReactDOM from "react-dom/client";
import Constants from "./utils/Constants.js";
const App = lazy(() => import("./App.jsx"));
const Landing = lazy(() => import("./components/pages/main/Landing.jsx"));

const router = createBrowserRouter([
	{
		path: `${Constants.BASE_PATH}/`,
		element: (
			<Suspense fallback={"Loading the application. Say cheese 😁"}>
				<App />
			</Suspense>
		),
		children: [
			{
				path: `${Constants.BASE_PATH}/`,
				element: (
					<>
						<Suspense fallback={"Loading the landing page..."}>
							<Landing />
						</Suspense>
					</>
				),
			},
		],
	},
]);

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
