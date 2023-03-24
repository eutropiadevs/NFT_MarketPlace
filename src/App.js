
import './App.scss';
import Navbar from './containers/NavigationBar';
import { Route, Routes } from 'react-router-dom';
import Home from './containers/Home';
import MarketPlace from './containers/MarketPlace';
import SingleProduct from './containers/singleMarket';
import Creator from './containers/creator';
import CardFilter from './components/filter';
import CatData from './containers/category';

function App() {
  return (
		<>
			<Navbar />
			<div className="app_container">
				<div className="max_width">
					<Routes>
						<Route path="*" element={<Home />} />
						<Route path="/marketPlace" element={<MarketPlace />} />
						<Route path="/marketPlace/:id" element={<SingleProduct />} />
						<Route path='/marketPlace/single' element={<CatData/>}/>
						<Route path="/creator" element={<Creator />} />
					</Routes>
				</div>
			</div>
		</>
	);
}

export default App;
