import { Layout, Menu } from "antd";
const { Header } = Layout;
import { HomeOutlined, CheckOutlined, FlagOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import Constants from "../../utils/Constants";

const items = [
	{
		key: "home",
		icon: <HomeOutlined />,
		label: <Link to={`${Constants.BASE_PATH}/`}>Home</Link>,
	},
	{
		key: "quests",
		icon: <CheckOutlined />,
		label: <Link to={`${Constants.BASE_PATH}/quests`}>Quests</Link>,
	},
	{
		key: "competitions",
		icon: <FlagOutlined />,
		label: <Link to={`${Constants.BASE_PATH}/competitions`}>Competitions</Link>,
	},
];

export default function MyHeader() {
	return (
		<>
			<Header
				style={{
					display: "flex",
					alignItems: "center",
				}}
			>
				<Link to={`${Constants.BASE_PATH}/`}>
					<h1 style={{ color: "white", marginRight: 25 }}>💻 Coderboard</h1>
				</Link>
				<Menu
					theme="dark"
					mode="horizontal"
					// TODO: Get the key from the URL
					defaultSelectedKeys={["home"]}
					items={items}
					style={{
						flex: 1,
						minWidth: 0,
					}}
				/>
			</Header>
		</>
	);
}
