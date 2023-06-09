import './middle-bar.css';

function MiddleBar() {
	function onClickHandle(e) {
		let currentTarget;

		e.target.className === 'input-container'
			? (currentTarget = e.target.children[0])
			: (currentTarget = e.target);

		currentTarget.classList.toggle('input-text-animation');
	}

	return (
		<>
			<div className='middle-bar-wrapper'>
				<div className='left-content-wrapper'>
					<img
						className='main-image-desktop'
						src='public\news-homepage-main\assets\images\image-web-3-desktop.jpg'
						alt=''
						width='970px'
						height='450px'
					/>
					<img
						className='main-image-mobile'
						src='public\news-homepage-main\assets\images\image-web-3-mobile.jpg'
						alt=''
					/>
					<div className='article-wrapper'>
						<div className='article-header-box'>
							<h2>The Bright Future of Web 3.0?</h2>
						</div>
						<div className='article-text-input-wrapper'>
							<span className='article-text'>
								We dive into the next evolution of the web that claims to put
								the power of the platforms back into the hands of the people.
								But is it really fulfilling its promise?
							</span>
							<div
								className='input-container'
								onMouseEnter={onClickHandle}
								onMouseLeave={onClickHandle}
							>
								<span className='input-text'>READ MORE</span>
							</div>
						</div>
					</div>
				</div>
				<div className='right-content-wrapper'>
					<div className='news-container'>
						<h2>New</h2>
						<section className='news-list'>
							<div className='news'>
								<span className='news-title'>Hydrogen VS Electric Cars</span>
								<span className='news-content'>
									Will hydrogen-fueled cars ever catch up to EVs?
								</span>
							</div>
							<div className='news'>
								<span className='news-title'>The Downsides of AI Artistry</span>
								<span className='news-content'>
									What are the possible adverse effects of on-demand AI image
									generation?
								</span>
							</div>
							<div className='news'>
								<span className='news-title'>Is VC Funding Drying Up?</span>
								<span className='news-content'>
									Private funding by VC firms is down 50% YOY. We take a look at
									what that means.
								</span>
							</div>
						</section>
					</div>
				</div>
			</div>
		</>
	);
}

export default MiddleBar;
