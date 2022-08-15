import { Layout, Menu, Row } from 'antd';
import React, { FC } from 'react';
import { useHistory } from 'react-router-dom';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { RouteNames } from '../router'

const Navbar: FC = () => {
	const router = useHistory()
	const { isAuth } = useTypedSelector(state => state.auth)
	return (
		<Layout.Header >
			<Row justify='end'>
				{isAuth
					?
					<>
						<div style={{ color: 'white' }}>
							Ulbi TV
						</div>
						<Menu theme='dark' mode='horizontal' selectable={false}>
							<Menu.Item onClick={() => console.log('exit ?')} key={1}>
								Exit
							</Menu.Item>
						</Menu>
					</>
					:
					<Menu theme='dark' mode='horizontal' selectable={false}>
						<Menu.Item onClick={() => router.push(RouteNames.LOGIN)} key={1}>
							Login
						</Menu.Item>
					</Menu>
				}
			</Row>
		</Layout.Header>
	);
};

export default Navbar;