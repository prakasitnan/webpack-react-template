import React, { Component } from "react";
import ReactDOM from "react-dom";
import Form from './js/components/Form';
import App from './js/App'; 

const wrapper = document.getElementById("container");
wrapper ? ReactDOM.render(<App />, wrapper) : false;