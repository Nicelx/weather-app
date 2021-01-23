import { TextField, Typography, Grid, Button } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'

const Home = props => {
	const weatherApi = 'ceed5aa3a57f8964a59eb9da254e1738'
	const onClickHandler = () => {
		console.log(props)
	}
	const [dataFromWeb, setDataFromWeb] = useState({})
	const city = 'Moscow';
	useEffect(()=> {
		// fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${weatherApi}&units=metric`)
		// 	.then(item => item.json())
		// 	.then(item => {
		// 		setDataFromWeb(item);
		// 		console.log(item);
		// 		;
		// 	})
		// 	.catch(err => console.log(err));
	}, [])
	
	return (
		<Grid container direction = "column" spacing = {2} alignItems="center">
			<Typography variant = 'h3'>Enter the city</Typography>
			<TextField></TextField>
			<Button variant = 'contained' onClick = {onClickHandler}>Submit</Button>
			<Button onClick = {props.onAdd}>let add 1 to couner</Button>
			<Grid>
				лфлфлф

			</Grid>
		</Grid>)
}

function mapStateToProps(state) {
	return {
		count : state.count
	}
}

function mapDispatchToProps(dispatch) {
	return {
		onAdd: () => dispatch({type:'INCREMENT'}),
	}
}
export default connect(mapStateToProps, mapDispatchToProps)(Home)