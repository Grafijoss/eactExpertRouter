import React, { Component } from 'react'

import { Link } from 'react-router-dom'

export default class Invoices extends Component {
	render() {
		return (
			<p>This is the Invouices compoenent <Link to="/">Return to root</Link></p>
		)
	}
}