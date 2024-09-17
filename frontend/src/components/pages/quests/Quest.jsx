import { Link } from "react-router-dom";
import { Row, Col, Card, Tooltip } from "antd";
import Constants from "../../../utils/Constants";

export default function Quest({ quest }) {
	const CardTitle = () => {
		return (
			<>
				<Row justify="space-between">
					<Col>
						{quest.id} - {quest.name}
					</Col>
					<Col>
						<Row gutter={16} justify="space-between">
							<Col>
								<Tooltip title="💲 Reward gained on quest accomplishment">
									💲 {quest.reward}
								</Tooltip>
							</Col>
							<Col>
								<Tooltip title="⚡ Energy consumed on quest accomplishment">
									⚡ {quest.energy}
								</Tooltip>
							</Col>
							<Col>
								<Tooltip title="👨 Active participants in the quest">
									👨 {quest.participants}
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
			<Link to={`${Constants.BASE_PATH}/quests/${quest.id}`}>
				<Card title={<CardTitle />} bordered hoverable>
					{quest.description}
				</Card>
			</Link>
		</>
	);
}
