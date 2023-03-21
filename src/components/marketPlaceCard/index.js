import React from 'react'
import HomeCard from '../homeCard'
import SingleCard from '../single';
import './index.scss'

const Market = () => {
  return (
		<div className="market-card">
			<div className='market-card_home'>
				{/* <HomeCard /> */}
                <SingleCard/>
			</div>
		</div>
	);
}

export default Market
