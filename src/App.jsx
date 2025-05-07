import SocialMediaContainer from './components/sm-container/SocialMediaContainer';
import SocialMediaDashboard from './components/sm-dashboard/SocialMediaDashboard';
import OverviewToday from './overview-today/OverviewToday';

const App = () => {
	return (
		<SocialMediaContainer>
			<SocialMediaDashboard />
			<OverviewToday />
		</SocialMediaContainer>
	);
};

export default App;
