/* Note: Conversion of JavaScript to TypeScript in this context involves specifying types where necessary. However, 
   since original React and ReactDOM usage here do not require explicit type annotations for basic usage, 
   the conversion will primarily focus on ensuring the file imports and usage align with TypeScript standards. 
   TypeScript specific changes beyond basic syntax will be minimal as the original code does not 
   involve complex data structures or functions that would benefit from explicit typing. */

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// In TypeScript, if the element can possibly be null, you might need to assert that it is not.
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  6097 <React.StrictMode>
  7219   <App />
  9218 </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();