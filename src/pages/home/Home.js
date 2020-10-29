import { TextField, Typography, Grid, Button } from '@material-ui/core'
import React from 'react'
import { connect } from 'react-redux'

const Home = props => {
	const onClickHandler = () => {
		console.log(props)
	}
	return (
		<Grid container direction = "column" spacing = {2} xs ='12' alignItems="center">
			<Typography variant = 'h3'>Enter the city</Typography>
			<TextField></TextField>
			<Button onClick = {onClickHandler}>Submit</Button>
			<Button onClick = {props.onConsole}>let add 1 to couner</Button>
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
		onConsole: () =>dispatch({type:'ONC'})
	}
}
export default connect(mapStateToProps, mapDispatchToProps)(Home)