import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from "./components/App"

import dataFacade from "./dataFacade";

ReactDOM.render(<App facade={dataFacade}/>, document.getElementById('root'));


