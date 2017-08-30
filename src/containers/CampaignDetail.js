import React, { Component } from 'react';
import { connect } from 'react-redux';
import CreateCommentForm from './CreateCommentForm';
import { fetchCampaign } from '../actions/campaigns';

class CampaignDetail extends Component {

    componentDidMount() {
        const { campaign, fetchCampaign, match: { params: { campaignId } } } = this.props;

        if (campaign) {
            fetchCampaign(campaignId)
        }
    }

    render() {
        const { campaign } = this.props;

        return (
            <div>
                {campaign ?
                    <div>
                        <h2>{campaign.title}</h2>
                        <h3>Goal: ${campaign.goal}</h3>
                        <h3>Pledged Support: ${campaign.pledged}</h3>
                        <h4>Comments: </h4>
                        <CreateCommentForm campaignId={campaign.id} />
                    </div>
                    :
                    <p>Loading...</p>
                }
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return ({
        campaign: state.campaigns.find(campaign => campaign.id === +ownProps.match.params.campaignId)
    });
};

export default connect(mapStateToProps, { fetchCampaign })(CampaignDetail);