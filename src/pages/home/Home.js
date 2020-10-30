import { TextField, Typography, Grid, Button } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'

const Home = props => {
	const API_LOL = 'RGAPI-376d91d1-e92d-44ce-9176-a295a6b6c528'
	const onClickHandler = () => {
		console.log(props)
	}
	const [dataFromWeb, setDataFromWeb] = useState({})
	useEffect(()=> {
		fetch('http://ddragon.leagueoflegends.com/cdn/10.22.1/data/en_US/profileicon.json')
			.then(item => item.json())
			.then(item => {
				setDataFromWeb(item);
				;
			})
			.catch(err => console.log(err));
	}, [])
	
	return (
		<Grid container direction = "column" spacing = {2} alignItems="center">
			<Typography variant = 'h3'>Enter the city</Typography>
			<TextField></TextField>
			<Button variant = 'contained' onClick = {onClickHandler}>Submit</Button>
			<Button onClick = {props.onAdd}>let add 1 to couner</Button>
			<Grid item container spacing = {1} xs ={12} md = {10}>
				{(dataFromWeb != undefined) &&
				Object.keys(dataFromWeb.data).map(id => {
					const path = `http://ddragon.leagueoflegends.com/cdn/10.22.1/img/profileicon/${id}.png`
					return (
						<img src = {path} style = {{width: '50px'}}></img>
					)
				})
				}
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