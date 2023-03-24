import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { display } from '../../features/detail/detailSlice'
import { useDispatch } from 'react-redux'
import './index.scss'
import Card from '../card'

const CardFilter = () => {
    const dispatch = useDispatch();
    const filteredData = useSelector(store=>store.detail.filteredData)
    console.log(filteredData)
    const [filter, setFilter] = useState(filteredData[0])
  return (
		<>
			<div className="initial-section">
				<div className="initial-view">
					<img src={filter?.img} />
					<div className="initial-view_middle">
						<h3>TSAS Humans collection</h3>
						<strong>Created by: stars168...y0x8</strong>
						<p>
							TSAS human collection is comprised of 4999 humans, a race built on
							greed and destruction with a lust for stars, the humans travel the
							galaxy for the sole reason to destroy the space apes!
						</p>
					</div>
					<div className="initial-view_end">
						<strong>
							8.00% Royalties<span>icon</span>
						</strong>
						<button>Make collection offer</button>
					</div>
				</div>
				<div>
					<div className="filter-grid">
						{filteredData.map((item) => {
							return (
								<Link 
									to={`/marketPlace/${item.id}`}
									onClick={() => dispatch(display(item.id))}
								>
									<Card {...item} />

									{/* <img src={item.img} />; */}
								</Link>
							);
						})}
					</div>
				</div>
			</div>
		</>
	);
}

export default CardFilter
