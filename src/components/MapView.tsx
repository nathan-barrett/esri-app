import * as React from 'react';

import { useRef, useEffect, useState } from 'react';

import { Scene } from '@esri/react-arcgis';

interface IMapViewProps {
	currentPlace: {
		center: number[];
	};
}
export const MapView: React.FC<IMapViewProps> = (props) => {
	const mapRef = useRef<HTMLDivElement>(null);
	const [view, setView] = useState(null);
	const [map, setMap] = useState(null);
	const { currentPlace } = props;
	const handleMapLoad = (_map: any, _view: any) => {
		setView(_view);
	};

	useEffect(() => {
		if (!view) return;
		const opts = {
			duration: 5000
		};
		const newCamera = view.camera.clone();

		console.log(newCamera);
		newCamera.position = {
			latitude: currentPlace.center[1],
			longitude: currentPlace.center[0],
			z: 700000
		};

		(view as any).goTo(newCamera, opts);
	}, [currentPlace]);

	return (
		<div className="map-container">
			<Scene
				viewProperties={{
					center: [-122.4443, 47.2529],
					zoom: 4
				}}
				className="map-node"
				mapProperties={{ basemap: 'topo-vector' }}
				onLoad={handleMapLoad}
			/>
		</div>
	);
};
