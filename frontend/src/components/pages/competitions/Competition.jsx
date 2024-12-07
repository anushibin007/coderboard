import { Link } from "react-router-dom";
import { Row, Col, Card, Tooltip } from "antd";
import Constants from "../../../utils/Constants";

export default function Competitions({ competition }) {
	const CardTitle = () => {
		return (
			<>
				<Row justify="space-between">
					<Col>
						{competition.id} - {competition.name}
					</Col>
					<Col>
						<Row gutter={16} justify="space-between">
							<Col>
								<Tooltip title="⏱️ Competition duration">
									⏱️ {competition.startTime} - {competition.endTime}
								</Tooltip>
							</Col>
							<Col>
								<Tooltip title="👨 Active participants in the quest">
									👨 {competition.participants}
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
			<Link to={`${Constants.BASE_PATH}/competitions/${competition.id}`}>
				<Card title={<CardTitle />} bordered hoverable>
					{competition.description}
				</Card>
			</Link>
		</>
	);
}
