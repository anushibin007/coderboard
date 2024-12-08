import { Row, Col, Card } from "antd";

export default function TaskListItem({ task }) {
	const CardTitle = () => {
		return (
			<>
				<Row justify="space-between">
					<Col>{task.name}</Col>
					<Col>
						<Row gutter={16} justify="space-between">
							<Col></Col>
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
