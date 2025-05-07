import { v4 } from 'uuid';
import { SM_DASHBOARD_INFO } from '../constants/sm-dashboard-info';
import SocialMediaItem from '../sm-item/SocialMediaItem';

// import styles from './social-media-dashboard.module.css';
const SocialMediaDashboard = () => {
	// SIN ESTILOS TODAVIA
	return (
		<div>
			<h1>Social Media Dashboard</h1>
			<p>Total Followers: 23,004</p>
			<section>
				{SM_DASHBOARD_INFO.map(item => (
					<SocialMediaItem key={v4()} {...item} />
				))}
			</section>
		</div>
	);
};
export default SocialMediaDashboard;
