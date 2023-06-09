import './main-content.css';

import MiddleBar from '../middle-bar/MiddleBar';
import BottomBar from '../bottom-bar/BottomBar';

export default function MainContent() {
	return (
		<>
			<div className='content-wrapper'>
				<MiddleBar />
				<BottomBar />
			</div>
		</>
	);
}
