import React from "react";
import "./index.scss";
import { FaBattleNet } from "react-icons/fa";

const Company = () => {
	const col = [
		{
			id: 1,
			icon: <FaBattleNet />,
			title: "BINANCE",
		},
		{
			id: 2,
			icon: <FaBattleNet />,
			title: "CARDANO",
		},
		{
			id: 3,
			icon: <FaBattleNet />,
			title: "Coincheck",
		},
		{
			id: 4,
			icon: <FaBattleNet />,
			title: "Paradigm",
		},
		{
			id: 5,
			icon: <FaBattleNet />,
			title: "BINANCE",
		},
	];

	return (
		<>
			<div className="client-section">
				<div className="client-section_item">
					{col.map((item) => {
						return (
							<div className="item" key={item.id}>
								<span>
									{item.icon}
								</span>
								{item.title}
							</div>
						);
					})}
				</div>
			</div>
		</>
	);
};

export default Company;
