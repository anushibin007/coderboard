import { Row } from "antd";

export default function LeaderBoard() {
	const leaderBoardData = {
		quests: [
			{
				id: "Q1",
				name: "Quest 1",
				participants: [
					{
						id: "user1",
						name: "Shidin",
						score: "100",
					},
				],
			},
		],
		competitions: [
			{
				id: "C1",
				name: "Competition 1",
				participants: [
					{
						id: "user1",
						name: "Shibong",
						score: "100",
					},
					{
						id: "user2",
						name: "Shimiya",
						score: "50",
					},
					{
						id: "user3",
						name: "Shkibidi",
						score: "25",
					},
				],
			},
		],
	};

	return (
		<div>
			<h1>LeaderBoard</h1>
			<h2>Quests</h2>
			<Row gutter={[16, 16]}>
				{leaderBoardData?.quests?.map((quest) => (
					<>
						Quest - {quest?.name}
						<br />
						Winner - {quest?.participants[0]?.name}
					</>
				))}
			</Row>
			<h2>Competitions</h2>
			<Row gutter={[16, 16]}>
				{leaderBoardData?.competitions?.map((competition) => (
					<>
						Competition - {competition?.name}
						<br />
						{competition?.participants?.map((participant) => (
							<>
								{participant?.name} - {participant?.score}
								<br />
							</>
						))}
					</>
				))}
			</Row>
		</div>
	);
}
