import React from 'react'
import './index.scss'


const Footer = () => {
  return (
		<>
			<div className='footer-container'>
				<div className="footer-section">
					<div className="overlay"></div>
					<div className="footer-section_info">
						<h1>Never miss a drop</h1>
						<p>
							Simply put, a paragraph is a collection of sentences
							<br /> all related to a central topic, idea, or theme.
						</p>
						<div className="subscribe">
							<input type="email" name="email" placeholder="Email Address" />
							<button>Subscribe</button>
						</div>
					</div>
					<div className="footer-section_img">
						{/* <img src={img} alt='img'/> */}
						img
					</div>
				</div>
			</div>
		</>
	);
}

export default Footer
