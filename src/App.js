import React, { Component } from 'react';
import Campaigns from './containers/Campaigns';
import CreateCampaignForm from './containers/CreateCampaignForm';
import { BrowserRouter as Router, Route} from 'react-router-dom' 

class App extends Component {
    render() {
        return (
            <Router>
              <div>
                  <Route exact path="/" component={Campaigns} />
                  <Route path="/campaigns/new" component={CreateCampaignForm} />
              </div>
            </Router>
        );
    }
}

export default App;
