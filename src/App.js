import React, { Component } from 'react';
import Campaigns from './containers/Campaigns';
import CreateCampaignForm from './containers/CreateCampaignForm';
import { Route, Link } from 'react-router-dom' 

class App extends Component {
    render() {
        return (
            <div>
                <h1>Iron Starter</h1>
                <Link id="createCampaignLink" to="/campaigns/new">Create Campaign</Link>
                <Route exact path="/" component={Campaigns} />
                <Route path="/campaigns/new" component={CreateCampaignForm} />
            </div>
        );
    }
}

export default App;
