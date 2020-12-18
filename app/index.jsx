const React = require('react');
const ReactDOM = require('react-dom');
import { BrowserRouter, Route, Link } from 'react-router-dom';
import ExecutionsTable from './components/executions'

ReactDOM.render((
    <BrowserRouter>
        <Route  path="/*" component={ExecutionsTable}/>
    </BrowserRouter>
    ), document.getElementById('wrapper')
);