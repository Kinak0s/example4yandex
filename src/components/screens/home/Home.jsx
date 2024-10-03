import { useNavigate } from 'react-router-dom'
import Layout from '../../layout/Layout'
import Button from '../../ui/button/Button'
import Statistics from '../profile/statistic/Statistics'
import styles from './Home.module.scss'
const Home = () => {
	const navigate = useNavigate()
	return (
		<Layout bgImage='/images/home-bg.jpg'>
			<Button clickHandler={() => navigate('/new-workout')} type='xl'>
				New
			</Button>
			<h1 className={styles.heading}>Возьми и сдай ЕГЭ!</h1>
			<Statistics />
		</Layout>
	)
}

export default Home
