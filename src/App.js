import React, { Component } from 'react';
import Campaigns from './containers/Campaigns';
import CreateCampaignForm from './containers/CreateCampaignForm';

class App extends Component {
    render() {
        return (
            <div>
                <Campaigns />
                <CreateCampaignForm />
            </div>
        );
    }
}

export default App;
