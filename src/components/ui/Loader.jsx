import { RiLoader2Fill } from 'react-icons/ri'
import styles from './Loader.module.scss'

const Loader = () => {
	return (
		<RiLoader2Fill alt='loader' draggable={false} className={styles.Loader} />
	)
}

export default Loader
