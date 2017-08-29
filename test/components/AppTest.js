import React from 'react'
import { mount } from 'enzyme'
import {expect} from 'chai'

import { MemoryRouter, Route } from 'react-router-dom' 
import App from '../../src/App'


describe('App', () => {
    let wrapper; 

    beforeEach(() => {
         wrapper = mount(
            <MemoryRouter initialEntries={[ '/campaigns/new' ]} initialIndex={0} >
                <App/>
            </MemoryRouter>
        ) 
    });

    it.skip('renders the Campaigns Component', () => {
        expect( wrapper.find('Campaigns').length).to.equal(1, "The App component is not mounting the Campaigns Container")
    });

    it.skip('renders the CreateCampaignForm Component', () => {
        expect( wrapper.find('CreateCampaignForm').length).to.equal(1, "The App component is not mounting the CreateCampaignForm Container")
    });
});