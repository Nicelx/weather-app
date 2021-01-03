import { Switch, Route } from 'react-router-dom'
import './App.css'
import Home from './pages/home/Home'
import Header from './components/Header/Header'
 
function App() {
	return (
		<>
			<Header/>
			<Switch>
				<Route path = '/' component = {Home}/>
			</Switch>		
		</>)
}


export default App;
