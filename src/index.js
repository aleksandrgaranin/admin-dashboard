import React from 'react';
import ReactDOM from 'react-dom';

import './index.css'
import App from './App';

import { ContexProvider } from './context/contextProvider'

ReactDOM.render(
	<ContexProvider>
		<App />
	</ContexProvider>,
	document.getElementById('root'));