import { Link } from "react-router-dom";
import { Row, Col, Card, Tooltip } from "antd";
import Constants from "../../../../utils/Constants";

export default function AssignmentListItem({ assignment }) {
	const CardTitle = () => {
		return (
			<>
				<Row justify="space-between">
					<Col>{assignment.name}</Col>
					<Col>
						<Row gutter={16} justify="space-between">
							<Col>
								<Tooltip title="⏱️ Competition duration">
									⏱️ {assignment.startTime} - {assignment.endTime}
								</Tooltip>
							</Col>
						</Row>
					</Col>
				</Row>
			</>
		);
	};

	return (
		<>
			<Link to={`${Constants.BASE_PATH}/assignments/${assignment.id}`}>
				<Card title={<CardTitle />} bordered hoverable>
					{assignment.description}
				</Card>
			</Link>
		</>
	);
}
