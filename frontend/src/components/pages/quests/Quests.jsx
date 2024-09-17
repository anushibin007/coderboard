import { Col, Row } from "antd";
import Quest from "./Quest";
import React from "react";

const quests = [
	{
		id: "Q1",
		name: "Find Bugs",
		description: "Perform rigorous testing and find at least 5 bugs in the room-inator project",
		reward: 200,
		energy: 3,
		participants: 20,
		completed: false,
		questgiver: "Anu Shibin Joseph Raj",
	},
	{
		id: "Q2",
		name: "Add Docs",
		description: "Add documentation for the room-inator project",
		reward: 100,
		energy: 1,
		participants: 5,
		completed: false,
		questgiver: "Anu Shibin Joseph Raj",
	},
	{
		id: "Q3",
		name: "Implement Feature",
		description: "Implement Issue#21 of the room-inator project",
		reward: 300,
		energy: 5,
		participants: 50,
		completed: true,
		questgiver: "Anu Shibin Joseph Raj",
	},
];

export default function Quests() {
	return (
		<>
			<h1>Quests</h1>
			<Row gutter={[16, 16]}>
				{quests.map((quest) => (
					<React.Fragment key={quest.id}>
						<Col span={24}>
							<Quest key={quest.id} quest={quest} />
						</Col>
					</React.Fragment>
				))}
			</Row>
		</>
	);
}
