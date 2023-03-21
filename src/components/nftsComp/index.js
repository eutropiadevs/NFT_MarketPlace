import React from "react";
import "./index.scss";
import { FaWallet } from "react-icons/fa";
import { FaWeightHanging } from "react-icons/fa";
import { FaRegArrowAltCircleDown } from "react-icons/fa";

const NftComponents = () => {
	const card = [
		{
			id: 1,
			icon: <FaWallet />,
			title: "Connect Wallet",
			text: `A paragraph is a series of related sentences
             developing a central idea, called the topic. `,
			color: "pink",
		},
		{
			id: 2,
			icon: <FaWeightHanging />,
			title: "Nft MarketPlace",
			text: `A paragraph is a series of related sentences
             developing a central idea, called the topic. `,
			color: "blue",
		},
		{
			id: 3,
			icon: <FaRegArrowAltCircleDown />,
			title: "Collect NFT",
			text: `A paragraph is a series of related sentences
             developing a central idea, called the topic.`,
			color: "pink",
		},
	];

	return (
		<>
			<div className="card-nfts">
               
                    <h1>Creare and Sell your Nfts</h1>
              
				<div className="card-nfts_container">
					{card.map((item) => {
						return (
							<div className="card" key={item.id}>
								<div className={`card-${item.color}`}>{item.icon}</div>
                                <div className="card-nfts_title">
                                    <h5>{item.title}</h5>
                                    <p>{item.text}</p>
                                </div>
							</div>
						);
					})}
				</div>
			</div>
		</>
	);
};

export default NftComponents;
