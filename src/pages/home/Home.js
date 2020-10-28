import { TextField, Typography, Grid, Button } from '@material-ui/core'
import React from 'react'

const Home = props => {
	return (
		<Grid container direction = "column" spacing = {2} xs ='12' alignItems="center">
			<Typography variant = 'h3'>Enter the city</Typography>
			<TextField></TextField>
			<Button>Submit</Button>
		</Grid>)
}
export default Home