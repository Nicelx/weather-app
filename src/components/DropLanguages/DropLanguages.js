import React from 'react';
import classes from './dropLanguages.module.css';

export const DropLanguages = (props) => {
	cls = [classes.DropLanguage];

	
	return (
		<>
			<div className = {cls}>
				{props.children}
			</div>
		</>
	);
};
