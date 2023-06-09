import { useRef } from 'react';
import './header-navigation.css';

function HeaderNavigation() {
	const navbarRef = useRef();

	function mobileMenuShow() {
		navbarRef.current.style.display = 'flex';
	}

	function mobileMenuClose() {
		navbarRef.current.style.display = 'none';
	}

	return (
		<>
			<section className='header-navbar-section'>
				<img
					className='mobile-menu'
					src='public\news-homepage-main\assets\images\icon-menu.svg'
					alt=''
					onClick={mobileMenuShow}
				/>
				<ul ref={navbarRef} className='navbar-wrapper'>
					<img
						className='mobile-close-menu'
						width='29'
						height='29'
						src='public\news-homepage-main\assets\images\icon-menu-close.svg'
						alt=''
						onClick={mobileMenuClose}
					/>
					<li className='nav-item'>Home</li>
					<li className='nav-item'>New</li>
					<li className='nav-item'>Popular</li>
					<li className='nav-item'>Trending</li>
					<li className='nav-item'>Categories</li>
				</ul>
			</section>
		</>
	);
}

export default HeaderNavigation;
