import React, { lazy, Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ReactDOM from "react-dom/client";
import Constants from "./utils/Constants.js";
import LeaderBoard from "./components/pages/leaderboard/LeaderBoard.jsx";
import SubmitSolution from "./components/pages/common/SubmitSolution.jsx";
const App = lazy(() => import("./App.jsx"));
const Landing = lazy(() => import("./components/pages/main/Landing.jsx"));
const Quests = lazy(() => import("./components/pages/quests/Quests.jsx"));
const Competitions = lazy(() => import("./components/pages/competitions/Competitions.jsx"));
const AssignmentsList = lazy(() =>
	import("./components/pages/competitions/assignments/AssignmentsList.jsx")
);
const AssignmentDetail = lazy(() =>
	import("./components/pages/competitions/assignments/AssignmentDetail.jsx")
);

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
			{
				path: `${Constants.BASE_PATH}/quests`,
				element: (
					<>
						<Suspense fallback={"Loading the Quests..."}>
							<Quests />
						</Suspense>
					</>
				),
			},
			{
				path: `${Constants.BASE_PATH}/competitions`,
				element: (
					<>
						<Suspense fallback={"Loading the Competitions..."}>
							<Competitions />
						</Suspense>
					</>
				),
			},
			{
				path: `${Constants.BASE_PATH}/competitions/:competitionId`,
				element: (
					<>
						<Suspense fallback={"Loading the Competition..."}>
							<AssignmentsList />
						</Suspense>
					</>
				),
			},
			{
				path: `${Constants.BASE_PATH}/assignments/:assignmentId`,
				element: (
					<>
						<Suspense fallback={"Loading the Assignment..."}>
							<AssignmentDetail />
						</Suspense>
					</>
				),
			},
			{
				path: `${Constants.BASE_PATH}/leaderboard`,
				element: (
					<>
						<Suspense fallback={"Loading the Leaderboard..."}>
							<LeaderBoard />
						</Suspense>
					</>
				),
			},
			{
				path: `${Constants.BASE_PATH}/submit`,
				element: (
					<>
						<Suspense fallback={"Loading the Submission form..."}>
							<SubmitSolution />
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
