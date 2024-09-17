import { Link } from "react-router-dom";
import Constants from "../../../utils/Constants";

export default function Landing() {
	return (
		<div className="landing">
			<h1>Welcome to Coderboard</h1>
			<h2>
				🔑 Go to <Link to={`${Constants.BASE_PATH}/login`}>Login</Link>
			</h2>
			<h2>
				✔ Go to <Link to={`${Constants.BASE_PATH}/quests`}>Quests</Link>
			</h2>
		</div>
	);
}
