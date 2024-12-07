import { Link } from "react-router-dom";
import { Row, Col, Card, Tooltip, Button } from "antd";
import Constants from "../../../../../utils/Constants";

export default function TaskListItem({ task }) {
	const CardTitle = () => {
		return (
			<>
				<Row justify="space-between">
					<Col>{task.name}</Col>
					<Col>
						<Row gutter={16} justify="space-between">
							<Col>
								<Button type="primary">Submit a Solution</Button>
							</Col>
						</Row>
					</Col>
				</Row>
			</>
		);
	};

	return (
		<>
			<Card title={<CardTitle />} bordered>
				{task.description}
			</Card>
		</>
	);
}
