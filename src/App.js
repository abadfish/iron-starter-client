import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Campaigns from './containers/Campaigns';
import CreateCampaignForm from './containers/CreateCampaignForm';

class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <h1>Iron Starter</h1>
                    <Link id="createCampaignLink" to="/">Campaigns</Link>
                    <Link id="createCampaignLink" to="/campaigns/new">Create Campaign</Link>
                    <Route exact path="/" component={Campaigns} />
                    <Route path="/campaigns/new" component={CreateCampaignForm} />
                </div>
            </Router>
        );
    }
}

export default App;
