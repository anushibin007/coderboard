import React from "react";
import { Layout, theme } from "antd";
const { Content } = Layout;

import { Outlet } from "react-router-dom";
import MyHeader from "./MyHeader";
import MyFooter from "./MyFooter";

export default function MainLayout() {
	const {
		token: { colorBgContainer, borderRadiusLG },
	} = theme.useToken();
	return (
		<Layout>
			<MyHeader />
			<Content
				style={{
					padding: "0 48px",
					margin: "16px 0",
				}}
			>
				<div
					style={{
						background: colorBgContainer,
						minHeight: 280,
						padding: 24,
						borderRadius: borderRadiusLG,
					}}
				>
					<Outlet />
				</div>
			</Content>
			<MyFooter />
		</Layout>
	);
}
