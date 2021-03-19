import React from 'react';
import classes from './DropLanguages.module.css';

export const DropLanguages = (props) => {
	const cls = [classes.DropLanguage];
	const titleOnClickHandler = (index) => {
		props.setActiveIndex(3);
	}
	if (props.open) cls.push(classes.DropOpen);
	return (
		<>	
			<button className = {classes.DropButton}onClick = {titleOnClickHandler}>{props.title}</button>
			<div className = {cls.join(' ')}>
				<ul className = {classes.List}>
					{props.children.map(item => (<a>{item}</a>))}
				</ul>
			</div>
		</>
	);
};
