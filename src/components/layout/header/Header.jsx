import { BiChevronLeft } from 'react-icons/bi'
import { LuUserCircle } from 'react-icons/lu'
import { useLocation, useNavigate } from 'react-router-dom'
import { useAuth } from '../../../hooks/useAuth'
import Hamburger from '../hamburger/Hamburger'
import styles from './Header.module.scss'

const Header = ({ backLink = '/' }) => {
	const { pathname } = useLocation()
	const navigate = useNavigate()
	const { isAuth } = useAuth()

	return (
		<header className={styles.header}>
			{isAuth && (
				<>
					{pathname === '/' && isAuth ? (
						<button
							onClick={() => {
								navigate('/profile')
							}}
						>
							<LuUserCircle color='#ffe4c4' />
						</button>
					) : (
						<button
							onClick={() => {
								navigate(isAuth ? backLink : '/auth')
							}}
						>
							<BiChevronLeft />
						</button>
					)}
					<Hamburger />
				</>
			)}
		</header>
	)
}

export default Header
