import { v4 } from 'uuid';
import { SM_DASHBOARD_INFO } from '../constants/sm-dashboard-info';
import SocialMediaItem from '../sm-item/SocialMediaItem';

import styles from './social-media-dashboard.module.css';
const SocialMediaDashboard = () => {
	// SIN ESTILOS TODAVIA
	return (
		<div className={styles.smcontainer}>
			<div className={styles.textcontainer}>
				<h1 className={styles.title}>Social Media Dashboard</h1>
				<p className={styles.text}>Total Followers: 23,004</p>
			</div>
			<section className={styles.dashboardcontainer}>
				{SM_DASHBOARD_INFO.map(item => (
					<SocialMediaItem key={v4()} {...item} />
				))}
			</section>
		</div>
	);
};
export default SocialMediaDashboard;
