import * as React from 'react';
import logo from './logo.svg';
import { MapView } from './components/MapView';
import { Menu } from './components/Menus';

const App: React.FC = () => {
	const [currentPlace, setCurrentPlace] = React.useState({
		center: [-122.4443, 47.2529]
	});
	return (
		<div className="application-container">
			<div className="header">
				<h1>GIS Sample App</h1>
			</div>
			<MapView currentPlace={currentPlace} />
			<Menu setCurrentPlace={setCurrentPlace} />
		</div>
	);
};

export default App;
