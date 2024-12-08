import { Col, Row } from "antd";
import AssignmentListItem from "./AssignmentListItem";
import React from "react";
import { Link, useParams } from "react-router-dom";
import Constants from "../../../../utils/Constants";

const assignments = [
	{
		id: "C1-A1",
		name: "JUnit 101 Assignment 1",
		description: "A beginner level assignment for JUnit",
		startTime: "2023-09-01T10:00:00",
		endTime: "2023-09-30T11:00:00",
	},
	{
		id: "C1-A2",
		name: "JUnit 101 Assignment 2",
		description: "A beginner level assignment for JUnit",
		startTime: "2023-10-01T10:00:00",
		endTime: "2023-10-30T11:00:00",
	},
];

export default function AssignmentsList() {
	const { competitionId } = useParams();

	return (
		<>
			<h1>
				Assignments for{" "}
				<Link to={`${Constants.BASE_PATH}/competitions/C1`}>
					{competitionId} - Junit 101
				</Link>
			</h1>
			<Row gutter={[16, 16]}>
				{assignments.map((assignment) => (
					<React.Fragment key={assignment.id}>
						<Col span={24}>
							<AssignmentListItem key={assignment.id} assignment={assignment} />
						</Col>
					</React.Fragment>
				))}
			</Row>
		</>
	);
}
