import * as React from 'react';
import { useEffect } from 'react';
import Dropdown from 'react-dropdown';
import { FaAngleDown } from 'react-icons/fa';

interface IMenuProps {
	setCurrentPlace: any;
}

const placeAdapter: any = {
	'Portland, OR': {
		location: { center: [-122.658722, 45.51223] },
		label: 'Portland, OR'
	},
	'Robbinsdale, MN': {
		location: { center: [-93.337372, 45.029652] },
		label: 'Robbinsdale, MN'
	},
	'Hartford, CT': {
		location: { center: [-72.67337, 41.765804] },
		label: 'Hartford, CT'
	}
};
export const Menu: React.FC<IMenuProps> = (props) => {
	const [selectedPlace, setSelectedPlace] = React.useState(
		placeAdapter['Portland, OR']
	);
	const dropDownOptions = [
		{
			value: 'Robbinsdale, MN',
			label: 'Robbinsdale, MN'
		},
		{
			value: 'Portland, OR',
			label: 'Portland, OR'
		},
		{ value: 'Hartford, CT', label: 'Hartford, CT' }
	];

	useEffect(() => {
		props.setCurrentPlace(selectedPlace.location);
	}, [selectedPlace]);

	return (
		<div className="drop-down-container">
			<Dropdown
				placeholder="SELECT NATHAN'S PLACE"
				value={selectedPlace.label}
				onChange={(e) => setSelectedPlace(placeAdapter[e.value])}
				className="drop-down"
				options={dropDownOptions}
				arrowClosed={<FaAngleDown className="dropdown-arrow" />}
				arrowOpen={<FaAngleDown className="dropdown-arrow" />}
			/>
		</div>
	);
};
