import { v4 } from 'uuid';
import { OVERVIEW_TODAY_INFO } from '../components/constants/overview-today-info';
import OverviewItem from '../components/overview-item/OverviewItem';

// import styles from './overview-today.module.css';

const OverviewToday = () => {
	return (
		<div>
			<h2>Overview - Today</h2>
			<section>
				{OVERVIEW_TODAY_INFO.map(item => (
					<OverviewItem key={v4()} {...item} />
				))}
			</section>
		</div>
	);
};

export default OverviewToday;
