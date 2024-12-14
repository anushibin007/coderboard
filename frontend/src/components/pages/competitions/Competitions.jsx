import { Col, Row } from "antd";
import CompetitionListItem from "./CompetitionListItem";
import React, { useEffect, useState } from "react";
import Constants from "../../../utils/Constants";

export default function Competitions() {
	const [competitions, setCompetitions] = useState([]);

	useEffect(() => {
		fetch(`${Constants.BACKEND_BASE_PATH}/api/v1/competitions`)
			.then((response) => response.json())
			.then((data) => setCompetitions(data))
			.catch((error) => console.error("Error fetching data:", error));
	}, []);
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
