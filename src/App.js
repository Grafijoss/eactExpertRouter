import React from 'react';
import { Route } from 'react-router-dom'
import Prueba from './components/Prueba'
import Invoices from './components/Invoices'
import './App.css';

function App() {
	return (
		<div className="App">
			<Route exact path="/" component={Prueba} />
			<Route exact path="/invoices" component={Invoices} />
		</div>
	);
}

export default App;
