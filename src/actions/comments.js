import { makingAPIRequest, successfulAPIRequest, unsuccessfulAPIRequest } from './apiRequestStatus';

const API_URL = 'http://localhost:3001/api';
// @ Action Creators

export const setComments = comments => {
    return {
        type: 'SET_COMMENTS',
        comments
    };
};

export const addComment = comment => {
    return { 
        type: 'ADD_COMMENT', 
        comment
    };
};

export const removeComment = commentId => {
    return {
        type: 'REMOVE_COMMENT', 
        commentId
    };
};

export const replaceComment = comment => {
    return {
        type: 'REPLACE_COMMENT',
        comment
    }
}

// @ Async Actions 

export const fetchCommentsForCampaignWithId = campaignId => {
    return dispatch => {
        dispatch(makingAPIRequest());
        return fetch(`${API_URL}/campaigns/${campaignId}/comments`)
            .then(response => response.json())
            .then(comments => {
                dispatch(successfulAPIRequest());
                dispatch(setComments(comments));
            })
            .catch(err => dispatch(unsuccessfulAPIRequest()));
    };
};


