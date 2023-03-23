import React, { useState } from "react";
import "./index.scss";
import TabItem from "../tabItem";

const Tabs = () => {
	const [activeTab, setActiveTab] = useState(0);


	const handleTabClick = (tabIndex) => {
		setActiveTab(tabIndex);
	};

	return (
		<div className="tabs">
			<div className="tabs__buttons">
				<button
					className={`tabs__button ${activeTab === 0 ? "active" : ""}`}
					onClick={() => handleTabClick(0)}
				>
					History
				</button>
				<button
					className={`tabs__button ${activeTab === 1 ? "active" : ""}`}
					onClick={() => handleTabClick(1)}
				>
					Bids
				</button>
				<button
					className={`tabs__button ${activeTab === 2 ? "active" : ""}`}
					onClick={() => handleTabClick(2)}
				>
					Tab 3
				</button>
			</div>
			<div className="tabs__content">
				{activeTab === 0 && <TabItem/>}
				{activeTab === 1 && <p>Content for Tab 2</p>}
				{activeTab === 2 && <p>Content for Tab 3</p>}
			</div>
		</div>
	);
};

export default Tabs;
