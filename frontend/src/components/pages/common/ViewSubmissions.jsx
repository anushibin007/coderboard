import React from "react";
import { useSearchParams } from "react-router-dom";

const submissionsData = [
	{
		key: "1",
		email: "XXXXXXXXXXXXXXXX",
		time: "2023-09-01T10:00:00",
		evaluationState: "pending",
		score: 0,
		comment: "",
	},
	{
		key: "2",
		email: "XXXXXXXXXXXXXXXX",
		time: "2023-09-01T10:00:00",
		evaluationState: "Rejected",
		score: 0,
		comment: "Wrong solution. Please improve and submit again.",
	},
	{
		key: "3",
		email: "XXXXXXXXXXXXXXXX",
		time: "2023-09-01T10:00:00",
		evaluationState: "Complete",
		score: 100,
		comment: "Excellent work!",
	},
];

export default function ViewSubmissions() {
	// Get the search parameters from the URL
	const [searchParams] = useSearchParams();

	// Access specific query parameters
	const activityId = searchParams.get("activityId");
	const activityKind = searchParams.get("activityKind");

	return (
		<>
			<h1>
				Solutions submitted for {activityKind} {activityId}
			</h1>
			{submissionsData.map((submission) => (
				<div key={submission.key}>
					<p>Email: {submission.email}</p>
					<p>Time of submission: {submission.time}</p>
					<p>Evaluation state: {submission.evaluationState}</p>
					<p>Score: {submission.score}</p>
					<p>Comment: {submission.comment}</p>
				</div>
			))}
		</>
	);
}
