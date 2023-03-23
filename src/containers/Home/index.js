import React from "react";
import "./index.scss";
import { data } from "../../utils/data";
import Company from "../../components/company";
import NftComponents from "../../components/nftsComp";
import HomeCard from "../../components/homeCard";
import Collection from "../../components/collection";
import { items } from "../../utils/singleCard";
import Cards from "../../components/cards";
import CardGrid from "../../components/cardGrid";
import Footer from "../../components/footer";

const Home = () => {
	return (
		<>
			<section className="main-container">
				<div className="main-section">
					<div className="main-section_first">
						<div className="first-content">
							<h1>Discover Rare Collections of Art & Nfts</h1>
						</div>
						<div className="content-para">
							<p>
								Simply put, a paragraph is a collection of sentences all related
								to a central topic, idea, or theme. Paragraphs 
							</p>
						</div>
						<div className="btn-container">
							<button>
								Start Collecting<span></span>
							</button>
						</div>
						<div className="section-a">
							{data.map((item) => {
								return (
									<article key={item.id} className="flex-hr">
										<div>
											<h3>{item.value}</h3>
											<p>{item.user}</p>
										</div>
										{item.hr}
									</article>
								);
							})}
						</div>
					</div>
					<div className="main-section_second card-format">
						<HomeCard />
					</div>
				</div>
				<div>
					<Company />
				</div>

				<NftComponents />
				{/* <Cards /> */}

				<Cards label={"Top Collections"} data={items} />
				<Collection />
				<CardGrid />
				<Footer />
				<hr></hr>
			</section>
		</>
	);
};

export default Home;
