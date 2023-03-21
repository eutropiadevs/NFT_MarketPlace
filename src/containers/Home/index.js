import React from 'react'
import Navbar from '../NavigationBar';
import './index.scss'
import { data } from '../../utils/data';
import Card from '../../components/card';
import Company from '../../components/company';
import NftComponents from '../../components/nftsComp';
import Cards from '../../components/cards';

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
								to a central topic, idea, or theme. Paragraphs act as structural
								tools for writers to organize their
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
						<Card/>
					</div>
				</div>
				<div>
					<Company/>
				</div>
				<NftComponents/>
				<Cards/>
			</section>
		</>
	);
}

export default Home
