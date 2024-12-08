import React from "react";
import { useSearchParams } from "react-router-dom";
import { Button, Form, Input, Select } from "antd";
const onFinish = (values) => {
	console.log("Success:", values);
};
const onFinishFailed = (errorInfo) => {
	console.log("Failed:", errorInfo);
};

export default function SubmitSolution() {
	// Get the search parameters from the URL
	const [searchParams] = useSearchParams();

	// Access specific query parameters
	const activityId = searchParams.get("activityId");
	const activityKind = searchParams.get("activityKind");

	return (
		<>
			<h1>Submit a Solution</h1>
			<Form
				name="basic"
				onFinish={onFinish}
				onFinishFailed={onFinishFailed}
				autoComplete="off"
				initialValues={{ activityId: activityId, activityKind: activityKind }}
			>
				<Form.Item
					label="Activity ID"
					name="activityId"
					rules={[
						{
							required: true,
							message: "Please input your E-mail ID!",
						},
					]}
				>
					<Input disabled={activityId} />
				</Form.Item>
				<Form.Item
					label="Activity Kind"
					name="activityKind"
					rules={[
						{
							required: true,
							message: "Please input your E-mail ID!",
						},
					]}
				>
					<Select
						disabled={activityKind}
						options={[
							{ value: "Quest", label: "Quest" },
							{ value: "Competition", label: "Competition" },
						]}
					></Select>
				</Form.Item>
				<Form.Item
					label="E-Mail ID"
					name="email"
					rules={[
						{
							required: true,
							message: "Please input your E-mail ID!",
						},
					]}
				>
					<Input />
				</Form.Item>

				<Form.Item
					label="Solution"
					name="solution"
					rules={[
						{
							required: true,
							message:
								"Please input your Solution text! Refer the activity detail for more information.",
						},
					]}
				>
					<Input />
				</Form.Item>

				<Form.Item label={null}>
					<Button type="primary" htmlType="submit">
						Submit
					</Button>
				</Form.Item>
			</Form>
		</>
	);
}
