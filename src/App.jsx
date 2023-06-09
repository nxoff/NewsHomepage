import './App.css';

import HeaderLogo from './components/header-logo/HeaderLogo';
import HeaderNavigation from './components/header-naviagation/HeaderNavigation';
import MainContent from './components/main-content/MainContent';

function App() {
	return (
		<>
			<div id='container'>
				<section className='header-wrapper-section'>
					<HeaderLogo />
					<HeaderNavigation />
				</section>
				<section className='main-content-section'>
					<MainContent />
				</section>
			</div>
		</>
	);
}

export default App;
