import React,{useState} from "react";
import classes from "./DropDown.module.css";

export const DropDown = (props) => {
	const [active, setActive] = useState(false);

	const toggle = () => {
		setActive(prev => !prev)
	}

	return (
		<>
			<div onClick = {toggle}>
				{props.children[0]}
			</div>
			<div className = {active ? classes.Active : classes.Disabled}>
				{props.children[1]}
			</div>
		</>
	);
};
