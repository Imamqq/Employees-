import { Layout, Space, Typography } from 'antd'
import { Link } from 'react-router-dom'
import { LoginOutlined, TeamOutlined, UserOutlined } from '@ant-design/icons'
import { CustomButton } from '../custom-button/CustomButton'
import { Paths } from '../../paths'

import s from './Header.module.css'

export const Header = () => {
	return (
		<Layout.Header className={s.header}>
			<Space>
				<TeamOutlined className={s.teamIcon} />
				<Link to={Paths.home}>
					<CustomButton type='ghost'>
						<Typography.Title level={1}>Сотрудники</Typography.Title>
					</CustomButton>
				</Link>
			</Space>
			<Space>
				<Link to={Paths.register}>
					<CustomButton type='ghost' icon={<UserOutlined />}>Зарегистрироваться</CustomButton>
				</Link>
				<Link to={Paths.login}>
					<CustomButton type='ghost' icon={<LoginOutlined />}>Войти</CustomButton>
				</Link>
			</Space>
		</Layout.Header>
	)
}
