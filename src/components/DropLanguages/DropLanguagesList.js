import { DropLanguages } from "./DropLanguages";
import classes from "./DropLanguages.module.css";
import { useState } from "react";

export const DropLanguagesList = () => {
	const titleArrays = [
		'Северная и Южная Америка',
		'Африка',
		'Азиатско-Тихоокеанский регион',
		'Европа',
		'Ближний Восток'
	]
	const dataArrays = [
		[
			'Антигуа и Барбуда | English' ,
			'Аргентина | Español',
			'Багамские острова |  English',
			'Барбадос | English',
			'Белиз | English',
			'Боливия | Español',
			'Бразилия | Português',
			'Канада | English',
			'Канада | Français',
			'Чили | Español',
			'Колумбия | Español',
			'Коста-Рика |  Español',
			'Доминика | English',
			'Доминиканская Республика |  Español',
			'Эквадор | Español',
			'Сальвадор | Español',
			'Гренада | English',
			'Гватемала | Español',
			'Гайана | English',
			'Гаити | Français',
			'Гондурас | Español',
			'Ямайка | English',
			'Мексика | Español',
			'Никарагуа | Español',
			'Панама | Español',
			'Панама | English',
			'Парагвай | Español',
			'Перу | Español',
			'Сент-Китс и  Невис | English',
			'Сент-Люсия |  English',
			'Сент-Винсент и  Гренадины | English',
			'Суринам | Nederlands',
			'Тринидад и Тобаго  |  English',
			'Уругвай | Español',
			'Соединенные Штаты |  English',
			'Соединенные Штаты |  Español',
			'Венесуэла | Español',
		], 
		[

		], 
		[

		]
	];
	const [activeIndex, setActiveIndex] = useState(-1);
	console.log(activeIndex);
	return (
		<>
			{dataArrays.map((item, index) => (
				<DropLanguages
					key={index}
					open={activeIndex == index && true}
					title={titleArrays[index]}
					setActiveIndex = {setActiveIndex}
				>
					{item}
				</DropLanguages>
			))}
		</>
	);
};
