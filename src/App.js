import React from 'react';
import { Route } from 'react-router-dom'
import Loadable from 'react-loadable'
// import Prueba from './components/Prueba'
// import Invoices from './components/Invoices'
import './App.css';

const Loader = x => Loadable({
	loading: () => 'Cargando...',
	loader: x
})

// Dinamic Import
const Prueba = Loader(() => import('./components/Prueba'))
const Invoices = Loader(() => import('./components/Invoices'))

function App() {
	return (
		<div className="App">
			<Route exact path="/" component={Prueba} />
			<Route exact path="/invoices" component={Invoices} />
		</div>
	);
}

export default App;
