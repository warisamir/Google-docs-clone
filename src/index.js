import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route } from 'react-router-dom';

import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import Dashboard from './components/Dashboard';

ReactDOM.render(
<Router>
    <div>
        <Route exact path="/" component={Dashboard} />
        <Route path="/document" component={App} />
    </div>
</Router>
, document.getElementById('root'));
registerServiceWorker();
