import './bottom-bar.css';

function BottomBar() {
	return (
		<>
			<section className='bottom-bar-wrapper'>
				<div className='side-article-container'>
					<img
						src='public\news-homepage-main\assets\images\image-retro-pcs.jpg'
						alt=''
						className='side-article-img'
					/>
					<div className='side-article-content-wrapper'>
						<h2 className='side-article-header'>Reviving Retro PCs</h2>
						<div className='side-article-text'>
							What happens when old PCs are given modern upgrades?
						</div>
					</div>
				</div>
				<div className='side-article-container'>
					<img
						src='public\news-homepage-main\assets\images\image-top-laptops.jpg'
						alt=''
						className='side-article-img'
					/>
					<div className='side-article-content-wrapper'>
						<h2 className='side-article-header'>Reviving Retro PCs</h2>
						<div className='side-article-text'>
							What happens when old PCs are given modern upgrades?
						</div>
					</div>
				</div>
				<div className='side-article-container'>
					<img
						src='public\news-homepage-main\assets\images\image-gaming-growth.jpg'
						alt=''
						className='side-article-img'
					/>
					<div className='side-article-content-wrapper'>
						<h2 className='side-article-header'>Reviving Retro PCs</h2>
						<div className='side-article-text'>
							What happens when old PCs are given modern upgrades?
						</div>
					</div>
				</div>
			</section>
		</>
	);
}

export default BottomBar;
