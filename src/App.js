import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import Campaigns from './containers/Campaigns';

class App extends Component {
    render() {

        const navLinkStyle = { 
            marginRight: '12px',
         };
        const headerStyle = { 
            width: '100%',
            borderBottom: 'solid 1px black',
            textAlign: 'center',
        };
        
        return (
            <Router>
                <div>
                    <h1 className="header" style={headerStyle}>
                        <Link to="/">Iron Starter</Link>
                    </h1>
                    <div className="navbar">
                        <Link style={navLinkStyle} to="/campaigns">Campaigns</Link>
                        <Link style={navLinkStyle} to="/campaigns/new">Create Campaign</Link>
                    </div>
                    <div className="mainRoutes">
                        <Route exact path="/" component={Home} />
                        <Route path="/campaigns" component={Campaigns} />
                    </div>
                </div>
            </Router>
        );
    }
}

export default App;
