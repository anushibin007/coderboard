import { Button, Col, Row } from "antd";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import TaskListItem from "./tasks/TaskListItem";

const mockAssignment = {
	id: "C1-A1",
	name: "JUnit 101 Assignment 1",
	description: "A beginner level assignment for JUnit",
	startTime: "2023-09-01T10:00:00",
	endTime: "2023-09-30T11:00:00",
	tasks: [
		{
			id: "C1-A1-T1",
			name: "Task 1 - Maven project with JUnit",
			description: "Do XYZ",
		},
		{
			id: "C1-A1-T2",
			name: "Task 2 - Sum of 2 numbers",
			description: "Do XYZ",
		},
	],
};

export default function AssignmentDetail() {
	const { assignmentId } = useParams();
	const [assignment, setAssignment] = useState({});

	useEffect(() => {
		fetchAssignment();
	}, []);

	const fetchAssignment = async () => {
		setAssignment(mockAssignment);
	};

	return (
		<>
			<Row justify="space-between">
				<Col>
					<h1>Tasks for Assignment {assignmentId}</h1>
				</Col>
				<Col>
					<Button type="primary">Submit a Solution</Button>
				</Col>
			</Row>
			<Row gutter={[16, 16]}>
				{assignment?.tasks?.map((task) => (
					<React.Fragment key={task.id}>
						<Col span={24}>
							<TaskListItem key={task.id} task={task} />
						</Col>
					</React.Fragment>
				))}
			</Row>
		</>
	);
}
