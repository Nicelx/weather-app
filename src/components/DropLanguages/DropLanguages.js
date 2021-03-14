import React from 'react';
import { useDropOpen } from './useDropOpen';
import { useState } from 'react';

export const DropLanguages = (props) => {

	const [open, setOpen] = useDropOpen();

	const toggle = () => {
		console.log('toggled')
		setOpen(!open);
	}
	return (
		<>
			<button onClick = {toggle}>{props.caption}</button>
			<div >
				{props.children}
			</div>
		</>
	);
};
