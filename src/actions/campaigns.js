import { 
    makingAPIRequest, 
    successfulAPIRequest, 
    unsuccessfulAPIRequest 
} from './apiRequestStatus';

const API_URL = 'http://localhost:3001/api';

// @ Action Creators 
export const setCampaigns = campaigns => {
    return {
        type: 'SET_CAMPAIGNS',
        campaigns
    };
};

export const addCampaign = campaign => {
    return {
        type: 'ADD_CAMPAIGN',
        campaign
    };
};

export const replaceCampaign = campaign => {
    return {
        type: 'REPLACE_CAMPAIGN',
        campaign
    };
};

export const removeCampaign = campaignId => {
    return {
        type: 'REMOVE_CAMPAIGN',
        campaignId
    };
};

// @ Async Actions
export const fetchCampaigns = () => {
    return dispatch => {
        dispatch(makingAPIRequest());
        return fetch(`${API_URL}/campaigns`)
            .then(response => response.json())
            .then(campaigns => {
                dispatch(successfulAPIRequest());
                dispatch(setCampaigns(campaigns));
            })
            .catch(err => dispatch(unsuccessfulAPIRequest()));
    };
};

export const createCampaign = campaignData => {
    return dispatch => {
        dispatch(makingAPIRequest());
        return fetch(`${API_URL}/campaigns`, {
            method: 'POST', 
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                campaign: campaignData
            })
        })
            .then(response => response.json())
            .then(campaign => {
                dispatch(successfulAPIRequest());
                dispatch(addCampaign(campaign));
            })
            .catch(err => dispatch(unsuccessfulAPIRequest()));
    };
};
