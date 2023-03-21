
import './App.scss';
import Navbar from './containers/NavigationBar';
import { Route, Routes } from 'react-router-dom';
import Home from './containers/Home';
import MarketPlace from './containers/MarketPlace';

function App() {
  return (
		<>
			<Navbar />
			<div className="app_container">
				<div className="max_width">
					<Routes>
						<Route path="*" element={<Home />} />
						<Route path="/marketPlace" element={<MarketPlace />} /> 
					</Routes>
				</div>
			</div>
		</>
	);
}

export default App;
