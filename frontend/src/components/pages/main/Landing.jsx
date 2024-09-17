import { Link } from "react-router-dom";
import Constants from "../../../utils/Constants";

export default function Landing() {
	return (
		<div className="landing">
			<h1>Welcome to the Landing Page</h1>
			<Link to={`${Constants.BASE_PATH}/quests`}>View Quests</Link>
		</div>
	);
}
