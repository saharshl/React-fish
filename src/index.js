import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import PickStore from './components/PickStore';
import App from './components/App';
import NotFound from './components/NotFound';

class Root extends React.Component {
    render() {
        return (
            <BrowserRouter>
            <Switch>
                <Route exact path='/' component={PickStore} />
                <Route path='/store/:storeID' component={App} />
                <Route component={NotFound} />
                </Switch>
                </BrowserRouter>
        )
    }
}

render(<Root />, document.querySelector('#main'));
