import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { filterCard } from "../../features/detail/detailSlice";
import { list } from "../../utils/listData";
import { column } from "../../utils/listData";
import './index.scss'

const ListView = () => {
    const dispatch = useDispatch();

	return (
		<>
			<div className="list-view">
				<table className="table-view" scroll={{ x: 600 }}>
					<tr>
						<div>
							<th>Collection</th>
							<th>Floor Price</th>
							<th>Best Offer</th>
							<th>24H Vol</th>
							<th>7D Vol</th>
							<th>Owners</th>
							<th>For Sale</th>
						</div>
					</tr>

					{list.map((item) => {
						return (
							<tr className="table-data">
								<div className="table-data_content">
									<Link
										to="/marketPlace/single"
										onClick={() => dispatch(filterCard(item.category))}
										className="title-di"
									>
										<td>
											<div className="title-div">
												<p>
													{item.id}
													<span>.</span>
												</p>
												<img src={item.img} alt="img" />
												<h5>{item.text1}</h5>
											</div>
										</td>
										<td>{item.para}</td>
										<td>{item.btn}</td>
										<td>{item.text2}</td>
										<td>{item.para1}</td>
										<td>{item.btn1}</td>
										<td>
											{item.sale}
											<span>{item.outOf}</span>
										</td>
									</Link>
									{/* <hr className="horizontal" /> */}
								</div>
							</tr>
						);
					})}
				</table>
			</div>
		</>
	);
};

export default ListView;
