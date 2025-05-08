import { v4 } from 'uuid';
import { OVERVIEW_TODAY_INFO } from '../constants/overview-today-info';
import OverviewItem from '../overview-item/OverviewItem';

import styles from './overview-today.module.css';

const OverviewToday = () => {
	return (
		<div className={styles.overviewcontainer}>
			<h2 className={styles.title}>Overview - Today</h2>
			<section className={styles.cardscontainer}>
				{OVERVIEW_TODAY_INFO.map(item => (
					<OverviewItem key={v4()} {...item} />
				))}
			</section>
		</div>
	);
};

export default OverviewToday;
