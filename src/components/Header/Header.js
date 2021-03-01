import React from 'react';
import classes from './Header.module.css'
import LanguageIcon from '@material-ui/icons/Language';
import NavLink from 'react-router-dom'

const Header = () => {
	return (
		<div className = {classes.Container}>
			<div className = {classes.FirstRowWrapper}>
				<div className = {classes.FirstRow}>
					<div className = {classes.LogoContainer}>
						<img className = {classes.Logo}src = "https://www.pngitem.com/pimgs/m/340-3405968_the-weather-channel-weather-channel-black-logo-png.png" alt = "logo" />
						<span>An IBM Business</span>
					</div>
					<div>
						<input type="text"/>
					</div>
					<div>
						<LanguageIcon/>
						RU | {'\u00B0'}C
					</div>
				</div>
			</div>
			
			<div className = {classes.SecondRow}>Second Container child</div>
			<div className = {classes.ThirdRow}>Third COntainer Child</div>
		</div>
	);
};

export default Header;