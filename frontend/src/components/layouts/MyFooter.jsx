import { Layout } from "antd";
const { Footer } = Layout;

export default function MyFooter() {
	return (
		<>
			<Footer
				style={{
					textAlign: "center",
				}}
			>
				An{" "}
				<a href="https://www.linkedin.com/in/anushibinj/" target="_blank">
					anushibin007
				</a>{" "}
				side project // Fork me on{" "}
				<a href="https://github.com/anushibin007/coderboard" target="_blank">
					{" "}
					GitHub
				</a>
			</Footer>
		</>
	);
}
