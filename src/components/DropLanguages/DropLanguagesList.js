import { DropLanguages } from "./DropLanguages";
import classes from "./DropLanguages.module.css";
import { useState } from "react";

export const DropLanguagesList = () => {
	const dataArrays = ["hi", "second", "third"];
	const [activeIndex, setActiveIndex] = useState(-1);
	console.log(activeIndex);
	return (
		<>
			{dataArrays.map((item, index) => (
				<DropLanguages
					key={index}
					open={activeIndex == index && true}
					title="some title"
					setActiveIndex = {setActiveIndex}
				>
					{item}
				</DropLanguages>
			))}
		</>
	);
};
