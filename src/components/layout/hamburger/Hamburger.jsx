import { IoClose, IoMenu } from 'react-icons/io5'
import { useOutside } from '../../../hooks/useOutside'
import styles from './Hamburger.module.scss'
import Menu from './Menu'

const Hamburger = () => {
	const { ref, isShow, setIsShow } = useOutside(false)
	return (
		<div className={styles.wrapper} ref={ref}>
			<button onClick={() => setIsShow(!isShow)}>
				{isShow ? <IoClose color='#ffe4c4' /> : <IoMenu color='#ffe4c4' />}
			</button>
			<Menu isShow={isShow} setIsShow={setIsShow} />
		</div>
	)
}

export default Hamburger
