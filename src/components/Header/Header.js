import React, { useState } from "react";
import classes from "./Header.module.css";
import LanguageIcon from "@material-ui/icons/Language";
import SearchIcon from "@material-ui/icons/Search";
import NavLink from "react-router-dom";

import { DropLanguagesList } from './../DropLanguages/DropLanguagesList';

const Header = () => {
	const [lang, setLang] = useState(false);

	const toggleLang = () => {
		setLang((prev) => !prev);
	};

	const paperClass = [classes.TemperatureSelectionPaper]
	if (lang) paperClass.push(classes.TemperatureSelectionPaperActive);


	return (
		<div className={classes.Container}>
			<div className={classes.FirstRowWrapper}>
				<div className={classes.FirstRow}>
					<div className={classes.LogoContainer}>
						<img
							className={classes.Logo}
							src="https://www.pngitem.com/pimgs/m/340-3405968_the-weather-channel-weather-channel-black-logo-png.png"
							alt="logo"
						/>
						<span>An IBM Business</span>
					</div>
					<div className={classes.InputContainer}>
						<input
							className={classes.Input}
							type="text"
							placeholder="Поиск по городу или индексу"
						/>
						<SearchIcon />
					</div>

					<div className={classes.TemperatureSelection}>
						<div onClick = {toggleLang} className = {paperClass.join(' ')}></div>
						<button className = {classes.TemperatureSelectionButton}onClick={toggleLang}>
							<span>
								<LanguageIcon />
							</span>
							<span>RU</span>|<span>{"\u00B0"}C</span>{" "}
							<span>J</span>
						</button>
						{lang && (
							<div className={classes.ContentWrapper}>
								<div className={classes.Content}>
									<div className={classes.ContentSwitcher}>
										<span
											className={
												classes.ContentSwitcherActive
											}
										>
											{"\u00B0"}C
										</span>{" "}
										| <span>{"\u00B0"}F</span>
									</div>
									<DropLanguagesList/>
									
								</div>
							</div>
						)}
					</div>
				</div>
			</div>

			<div className={classes.SecondRowWrapper}>
				<div className={classes.SecondRow}>second row</div>
			</div>
			<div className={classes.ThirdRow}>Third COntainer Child</div>
		</div>
	);
};

export default Header;
