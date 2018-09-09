import React from "react";
import ReactDOM from "react-dom";

import './scss/app.scss';
import MainComponent from './components/Main'

const App = document.getElementById("app");

ReactDOM.render(<MainComponent name="Twice" />, App);
