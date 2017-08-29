import React from 'react'
import { mount } from 'enzyme'
import {expect} from 'chai'
import App from '../../src/App'
import Campaigns from '../../src/containers/Campaigns'
import CreateCampaignForm from '../../src/containers/CreateCampaignForm'


describe('App', () => {
    it('renders the Campaigns Component', () => {
        const wrapper = mount(<App />)
        expect( wrapper.find(Campaigns).length).to.equal(1, "The App component is not mounting the Campaigns Container")
    });

    it('renders the CreateCampaignForm Component', () => {
        const wrapper = mount(<App />)
        expect( wrapper.find(CreateCampaignForm).length).to.equal(1, "The App component is not mounting the CreateCampaignForm Container")
    });
});