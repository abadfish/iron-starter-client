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