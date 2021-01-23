import { Switch, Route } from 'react-router-dom'
import './App.css'
// import Home from './pages/home/Home2'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import ReduxPlaying from './ReduxPlaying';
 
function App() {
	return (
		<>
			<Header/>
			<Switch>
				{/* <Route path = '/' component = {Home}/> */}
				<Route path = '/' component = {ReduxPlaying}/>
			</Switch>	
			<Footer/>	
		</>)
}


export default App;
