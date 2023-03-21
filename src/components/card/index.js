import React from 'react'
import './index.scss'
import img1 from "../../assets/img/img1.jpg";
import img2 from "../../assets/img/img2.jpg";
import img3 from "../../assets/img/img3.jpg";
import img4 from "../../assets/img/img4.jpg";
import diamond from '../../assets/img/diamond.jpg'

const Card = ({text1, para, btn, text2, para1, btn1}) => {
	console.log(text1)
  return (
		<>
			<div className="card-section">
				
					<div className="card-section_img">
						<img className="main-img" src={diamond} alt={diamond} />
					</div>
					<div className='card-section_info'>
						<div className="person-img">
							<img src={img1}/>
							<img src={img2}/>
							<img src={img3}/>
							<img src={img4}/>
						</div>
						<div className='info-container'>
							<div className='info-container_first'>
								<h5>{text1}</h5>
								<p>{para}</p>
								<button>{btn}</button>
							</div>
							<div className='info-container_second align'>
								<h3>{text2}</h3>
								<p>{para1}</p>
								<button>{btn1}</button>
							</div>
						</div>
					</div>
				
			</div>
		</>
	);
}

export default Card
