import React, { useState, useEffect } from 'react';
import './locations.css';
import './src/Data/data';
const Locations = () => {
	const renderLocations = () => {
		return hospitals.map((location) => {
			return <div className='location-card'> hospitals[0]</div>;
		});
	};
	return (
		<div>
			<h1>Find a COVID-19 Vaccine Location</h1>
			<h2>Vaccine Locations</h2>
			<section className='container-locations'>{renderLocations()}</section>
		</div>
	);
};

export default Locations;
