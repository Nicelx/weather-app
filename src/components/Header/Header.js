import React from 'react';
import classes from './Header.module.css'

const Header = () => {
	return (
		<div className = {classes.Container}>
			<div>
				<div>
					<img className = {classes.Logo}src = "https://www.pngitem.com/pimgs/m/340-3405968_the-weather-channel-weather-channel-black-logo-png.png" alt = "logo" />
					<span>An IBM Business</span>
				</div>
				<input type="text"/>
				<div></div>
			</div>
			<div>Second Container child</div>
			<div>Third COntainer Child</div>
		</div>
	);
};

export default Header;