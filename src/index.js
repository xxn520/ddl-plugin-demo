import React from 'react'
import ReactDom from 'react-dom'

ReactDom.render(
	React.createElement(
	  	'h1',
	  	{className: 'hello react'},
	  	'hello react'
	), 
	document.getElementById('app')
);