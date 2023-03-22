import React from 'react'
import { items } from "../../utils/singleCard";
import './index.scss'
	

const TabItem = () => {
    	// const [data, setData] = useState(items);
  return (
		<>
			<div className="tab-items">
				{items.map((item) => {
					return (
						<div className='tab-items_single' key={item.id}>
							<img className="tab-items_img" src={item.image} alt="img" />
							<div className="tab-items_content">
								<h4>{item.title}</h4>
								<p>{item.year}</p>
							</div>
						</div>
					);
				})}
			</div>
		</>
	);
}

export default TabItem
