import OverviewToday from './components/overview-today/OverviewToday';
import SocialMediaContainer from './components/sm-container/SocialMediaContainer';
import SocialMediaDashboard from './components/sm-dashboard/SocialMediaDashboard';

const App = () => {
	return (
		<SocialMediaContainer>
			<SocialMediaDashboard />
			<OverviewToday />
		</SocialMediaContainer>
	);
};

export default App;
