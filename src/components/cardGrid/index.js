import React from 'react'
import { cardData } from '../../utils/cardData';
import Card from '../card';
import './index.scss'

const CardGrid = () => {
  return (
		<>
			<div className="latest-drop">
				<div className="latest-drop_head">
					<h1>Top Collections over last</h1>
					<div className="btn-container">
						<button>View All</button>
						<button>Category</button>
						<button>Type</button>
					</div>
				</div>
				<div className="latest-drop_cards">
					<div className="latest-drop_cards_item">
						{cardData.map(item=>{
                            return(
                                <Card {...item}/>
                            )
                            })}
					</div>
				</div>
			</div>
		</>
	);
}

export default CardGrid
