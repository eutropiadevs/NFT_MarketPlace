import React from 'react'
import SingleCard from '../singleCard'
import { market } from '../../utils/marketCard'
import './index.scss'

const MarketCard = () => {
    
  return (
		<>
			<div className='market-container'>
				{market.map((item, index) => {
					return (
						<div key={index} >
                            <SingleCard {...item}/>
                        </div>
					);
				})}
			</div>
		</>
	);
}

export default MarketCard
