import React from "react";
import "./index.scss";
import { showSingle } from "../../features/detail/detailSlice";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

const SingleCard = ({id, text1, para, img }) => {
const dispatch = useDispatch()
console.log(id)
	return (
		<>
			<Link to={`/marketPlace/${id}`} className="single-card" onClick={()=>dispatch(showSingle(id))}>
				<img src={img} alt='img'/>
				<div className="single-card_container">
					<h3>{text1}</h3>
					<p>{para}</p>
				</div>
			</Link>
		</>
	);
};

export default SingleCard;
