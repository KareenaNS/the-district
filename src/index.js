// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import { BrowserRouter } from 'react-router-dom';
// import App from './App';
// import './App.css';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// const basename = process.env.PUBLIC_URL || '/'; // GitHub Pages needs this for routing
// root.render(
//     <BrowserRouter basename={basename}>
//     <App />
//     </BrowserRouter>
// );


import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import App from './App';
import './App.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <HashRouter>
        <App />
    </HashRouter>
);
