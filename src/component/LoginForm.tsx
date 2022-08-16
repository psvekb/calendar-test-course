import { Button, Form, Input } from 'antd';
import React, { FC } from 'react';
import { useDispatch } from 'react-redux';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { AuthActionCreators } from '../store/reducers/auth/action-creators';
import { rules } from '../utils/rules';

const LoginForm: FC = () => {
	const dispatch = useDispatch()
	const { error, isLoading } = useTypedSelector(state => state.auth)

	const submit = () => {
		console.log('try login')
		dispatch(AuthActionCreators.login('user', '123'))
	}
	return (
		<Form
			onFinish={submit}>
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