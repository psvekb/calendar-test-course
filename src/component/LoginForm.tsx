import { Button, Form, Input } from 'antd';
import React, { FC } from 'react';
import { rules } from '../utils/rules';

const LoginForm: FC = () => {
	return (
		<Form>
			<Form.Item label="Username"
				name="username"
				rules={[rules.required("please input your username")]}>
				<Input />
			</Form.Item>
			<Form.Item label="Password"
				name="password"
				rules={[rules.required("please input your password")]}>
				<Input />
			</Form.Item>
			<Form.Item >
				<Button type="primary" htmlType="submit">
					Login
				</Button>
			</Form.Item>
		</Form>
	);
};

export default LoginForm;