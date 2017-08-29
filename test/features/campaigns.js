// import { render, unmountComponentAtNode } from 'react-dom'
// import React from 'react';
// import { Route, Link, MemoryRouter } from 'react-router-dom';
import { expect } from 'chai';
import App from '../../src/App';
import { componentTestMounter } from './componentTestMounter';
import { Simulate } from 'react-addons-test-utils'


describe('Campaigns Feature', () => {

    it('Renders Iron Starter Splash Page', (done) => {
        componentTestMounter({
            component: App, 
            store: {
                subscribe: function() {}
            },
            steps: [
                ({ history, div }) => {
                    expect(div.innerHTML).to.include('<h1>Iron Starter</h1>', 'Must include a h1 tag with Iron Starter text');
                    expect(div.innerHTML).to.include('<a id="createCampaignLink" href="/campaigns/new">Create Campaign</a>', 'Must Include a <Link id="createCampaignLink" to="/campaigns/new">Create Campaign</Link> component')
                    expect(div.innerHTML).to.include('<div className="campaign-card"><h3>Learn React</h3><p>Goal: $10</h3></div>')
                    done()
                },
            ]
        });
    });

    it('Renders Campaigns Component when location is at /', (done) => {
        componentTestMounter({
            component: App, 
            store: {},
            steps: [
                ({ div }) => {
                    expect(div.innerHTML.match(/Campaigns/))
                    done()
                }
            ]
        });
    });

    it('Should navigate to /campaigns/new when you click on Create Campaign Link', (done) => {
        componentTestMounter({
            component: App, 
            store: {},
            steps: [
                ({ history, div }) => {
                    history.push('/');
                    const link = div.querySelector('a[href="/campaigns/new"]');
                    Simulate.click(link, { button: 0 });
                },
                ({ location, div }) => {
                    expect(location.pathname).to.equal('/campaigns/new');
                    expect(div.innerHTML).to.include('<form></form>');
                    done()
                },
            ]
        })
    })
});
