import { Switch, Route } from 'react-router-dom'
import './App.css'
// import Home from './pages/home/Home2'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
// import ReduxPlaying from './ReduxPlaying';
// import ReduxPlaying2 from './ReduxPlaying2'
// import ReduxPlaying3 from './ReduxPlaying3'
 import Counter from './components/Counter/Counter';

function App() {
	return (
		<>
			<Header/>
			<Switch>
				{/* <Route path = '/' component = {Home}/> */}
				{/* <Route path = '/' component = {ReduxPlaying}/> */}
				{/* <Route path = '/' component = {ReduxPlaying3}/> */}
				<Route path = '/' component = {Counter}/>
			</Switch>	
			<Footer/>	
		</>)
}


export default App;
