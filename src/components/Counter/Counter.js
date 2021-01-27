import React, {useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
	decrement,
	increment,
	incrementByAmount,
	incrementAsync,
	selectCount,
	selectData,
	getData,
	addAsync
  } from './counterSlice';

const Counter = () => {
	const count = useSelector(selectCount);
	const data = useSelector(selectData)

	const dispatch = useDispatch();
	const [incrementAmount, setIncrementAmount] = useState('2');
	console.log(getData)

	return (
		<div>
			<button onClick = {() => dispatch(increment())}>+</button>
			<button onClick = {() => dispatch(decrement())}>-</button>
			<span>{count}</span>
			<input type="text" value = {incrementAmount} onChange = {e => setIncrementAmount(e.target.value)}/>
			<button onClick = {() => dispatch(incrementByAmount(Number(incrementAmount)))}>increment by amount</button>

			<button onClick = {() => dispatch(getData())}>get data</button>
			<div>
				<button onClick = {() => dispatch(addAsync('some string'))}>add async</button>
				<span>{data && data}</span>
			</div>
		</div>

		
	);
};

export default Counter;