import { Col, Row } from "antd";
import CompetitionListItem from "./CompetitionListItem";
import React from "react";

const competitions = [
	{
		id: "C1",
		name: "JUnit 101",
		description: "A beginner level assignment-based learning for JUnit",
		participants: 20,
		owner: "Anu Shibin Joseph Raj",
		startTime: "2023-09-01T10:00:00",
		endTime: "2023-10-01T11:00:00",
		assignments: [
			{
				id: "C1-A1",
				name: "JUnit 101 Assignment 1",
				description: "A beginner level assignment for JUnit",
				startTime: "2023-09-01T10:00:00",
				endTime: "2023-09-01T11:00:00",
				questions: [
					{
						id: "C1-A1-Q1",
						name: "Question",
						description: "Do XYZ",
					},
				],
			},
		],
	},
];

export default function Competitions() {
	return (
		<>
			<h1>Competitions</h1>
			<Row gutter={[16, 16]}>
				{competitions.map((competition) => (
					<React.Fragment key={competition.id}>
						<Col span={24}>
							<CompetitionListItem key={competition.id} competition={competition} />
						</Col>
					</React.Fragment>
				))}
			</Row>
		</>
	);
}
