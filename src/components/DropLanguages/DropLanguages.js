import React from 'react';
import classes from './DropLanguages.module.css';

export const DropLanguages = (props) => {
	const cls = [classes.DropLanguage];
	const titleOnClickHandler = (index) => {
		props.setActiveIndex(3);
	}
	
	return (
		<>	
			<button onClick = {titleOnClickHandler}>{props.title}</button>
			<div className = {cls}>
				{props.children}
			</div>
		</>
	);
};
