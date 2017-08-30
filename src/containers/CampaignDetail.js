import React, { Component } from 'react';
import CreateCommentForm from './CreateCommentForm';

class CampaignDetail extends Component {

    render() {
        console.log('hi');
        return (
            <div>
                Campaign Detail
                <h3>Comments:</h3>
                <CreateCommentForm />
            </div>
        )
    }
}

export default CampaignDetail;