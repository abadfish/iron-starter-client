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


