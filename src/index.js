//import ReactDOM from 'react-dom'
import { createRoot } from 'react-dom/client';
import React from 'react'
import App from './components/App'
import { BrowserRouter } from 'react-router-dom';

const container =  document.getElementById('x');

const root = createRoot(container)

//const root = ReactDOM.createRoot(container);

//ReactDOM.render(<App />, container )

root.render(
    <BrowserRouter>
<App />
</BrowserRouter>
)

