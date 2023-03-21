import React from 'react'
import Card from '../card'
import './index.scss'
import { cardData } from '../../utils/cardData'


const Cards = () => {
    console.log(cardData)
  return (
		<>
			<div className="latest-drop">
				<div className="latest-drop_title">
					<h1>Latest drop</h1>
					<div className="btn-container">
						<button>View All</button>
					</div>
				</div>
				<div className="latest-drop_cards">
					<div className="latest-drop_cards_flow">
						{cardData.map(item=>{
                            return <div className="card-width" key={item.id}>
                                <Card {...item}/>
                            </div>;
                        })}
						{/* <div className="card-width">
							<Card />
						</div>
						<div className="card-width">
							<Card />
						</div>
						<div className="card-width">
							<Card />
						</div>
						<div className="card-width">
							<Card />
						</div> */}
					</div>
				</div>
			</div>
		</>
	);
}

export default Cards
