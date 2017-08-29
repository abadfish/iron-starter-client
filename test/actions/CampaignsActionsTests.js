import { expect } from 'chai';
import uuid from 'uuid';
import thunk from 'redux-thunk';
import nock from 'nock';
import configureMockStore from 'redux-mock-store';
import 'isomorphic-fetch';
import { setCampaigns, addCampaign, removeCampaign, replaceCampaign, fetchCampaigns, createCampaign, updateCampaign, deleteCampaign } from '../../src/actions/campaigns';

describe('Campaigns Action Creators', () => {
    let campaign;
    let campaigns;

    beforeEach(() => {
        campaigns = [
            {
                id: uuid(),
                title: 'First Title', 
                description: 'First Description',
                goal: 450000,
                pledged: 45,
                deadline: new Date(),
                created_at: new Date(),
                updated_at: new Date(),
                comments: []
            },
            {
                id: uuid(),
                title: 'Second Title',
                description: 'Second Description',
                goal: 20000,
                pledged: 10000,
                deadline: new Date(),
                created_at: new Date(),
                updated_at: new Date(),
                comments: []
            }
        ];
        campaign = campaigns[0];
    });

    describe('setCampaigns(campaigns: Array<Campaign>', () => {
        it('should return an Object with a SET_CAMPAIGNS type and Campaigns: Array<Campaign>', () => {
            expect(setCampaigns(campaigns)).to.deep.equal({
                type: 'SET_CAMPAIGNS',
                campaigns
            });
        });
    });

    describe('addCampaign(Campaign: Object)', () => {
        it("should return an Object with a 'ADD_CAMPAIGN' type and a Campaign: Object", () => {
            expect(addCampaign(campaign)).to.deep.equal({
                type: 'ADD_CAMPAIGN', 
                campaign,
            });
        });
    });

    describe('replaceCampaign(Campaign: Object)', () => {
        it("should return an Object with a 'REPLACE_CAMPAIGN' type and a Campaign: Object", () => {
            expect(replaceCampaign(campaign)).to.deep.equal({
                type: 'REPLACE_CAMPAIGN',
                campaign,
            });
        });
    });

    describe('removeCampaign(campaignId: Number)', () => {
        it("should return an Object with a 'REMOVE_CAMPAIGN' type", () => {
            expect(removeCampaign(campaign.id)).to.deep.equal({
                type: 'REMOVE_CAMPAIGN', 
                campaignId: campaign.id
            });
        });
    });
});