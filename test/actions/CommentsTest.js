import { expect } from 'chai';
import uuid from 'uuid';
import thunk from 'redux-thunk';
import nock from 'nock';
import configureMockStore from 'redux-mock-store';
import 'isomorphic-fetch';
import { setComments, addComment, removeComment, replaceComment, fetchComments, createComment, updateComment, deleteComment } from '../../src/actions/comments';

describe('Comments Action Creators', () => {
    describe('setComments(comments: Array<Object>)', () => {
        it("should return an Object with a 'SET_COMMENTS' type and an comments: Array<Comment>", () => {
            const comments = [
                { id: uuid(), content: 'First Comment' },
                { id: uuid(), content: 'Second Comment' }
            ];

            expect(setComments(comments)).to.deep.equal({
                type: 'SET_COMMENTS', 
                comments
            });
        });
    });

    describe('addComment(comment: Object)', () => {
        it("should return an Object with a 'ADD_COMMENT' type and a comment: Object", () => {
            const comment = {
                id: uuid(),
                content: 'Test Content'
            };

            expect(addComment(comment)).to.deep.equal({
                type: 'ADD_COMMENT', 
                comment
            });
        });
    });

    describe('replaceComment(comment: Object)', () => {
        it("should return an Object with a 'REPLACE_COMMENT' type and a comment: Object", () => {
            const comment = {
                id: uuid(),
                content: 'Test Content'
            };

            expect(replaceComment(comment)).to.deep.equal({
                type: 'REPLACE_COMMENT',
                comment
            });
        });
    });

    describe('removeComment(commentId: Number)', () => {
        it("should return an Object with a 'REMOVE_COMMENT' type and a commendId: Number", () => {
            expect(removeComment(1)).to.deep.equal({
                type: 'REMOVE_COMMENT', 
                commentId: 1
            });
        });
    });
});

describe('Comments Async Actions', () => {
    const campaign = {
        id: uuid(),
        title: 'Test Title', 
        description: 'Test Description',
        goal: 450000,
        pledged: 45,
        deadline: new Date(),
        created_at: new Date(),
        updated_at: new Date(),
        comments: []
    };
    const initialState = {
        campaigns: [
            campaign
        ]
    };
    const url = 'http://localhost:3001/api';
    const middlewares = [thunk];
    const mockStore = configureMockStore(middlewares);
    const requiredActionCreators = [
        { type: 'MAKING_API_REQUEST' },
        { type: 'SUCCESSFUL_API_REQUEST' }
    ];
    let store;
    let comment;
    let comments;
    
    beforeEach(() => {
        store = mockStore(initialState)
        comments = [
            { id: uuid(), content: 'First Comment', created_at: "2017-08-28T20:33:07.449Z", updated_at: "2017-08-28T20:33:07.449Z" },
            { id: uuid(), content: 'Second Comment', created_at: "2017-08-28T20:33:07.449Z", updated_at: "2017-08-28T20:33:07.449Z" }
        ];
        comment = { id: uuid(), content: 'Test Comment', created_at: "2017-08-28T20:33:07.449Z", updated_at: "2017-08-28T20:33:07.449Z" };
    });

    afterEach(() => nock.cleanAll());

    describe('fetchComments(campaignId: Number)', () => {
        it('dispatches MAKING_API_REQUEST, SUCCESSFUL_API_REQUEST and SET_COMMENTS action types', () => {
            nock(url)
                .get(`/campaigns/${campaign.id}/comments`)
                .reply(200, comments);

            return store.dispatch(fetchComments(campaign.id))
                .then(() => expect(store.getActions()).to.deep.equal([
                    ...requiredActionCreators,
                    { type: 'SET_COMMENTS', comments }
                ]));
        });
    });

    describe('createComment(campaignId: Number, comment: Object)', () => {
        it('dispatches MAKING_API_REQUEST, SUCCESSFUL_API_REQUEST and ADD_COMMENT action types', () => {
            const newComment = { content: 'Test Comment' };

            nock(url)
                .post(`/campaigns/${campaign.id}/comments`)
                .reply(201, comment);

            return store.dispatch(createComment(campaign.id, newComment))
                .then(() => expect(store.getActions()).to.deep.equal([
                    ...requiredActionCreators,
                    { type: 'ADD_COMMENT', comment }
                ]));
        });
    });

    describe('updateComment(campaignId: Number, commentId: Number', () => {
        it('dispatches MAKING_API_REQUEST, SUCCESSFUL_API_REQUEST and REPLACE_COMMENT action types', () => {
            const updatedComment = Object.assign({}, comment, { content: 'Updated Content' });
            
            nock(url)
                .put(`/campaigns/${campaign.id}/comments/${updatedComment.id}`)
                .reply(200, updatedComment);

            return store.dispatch(updateComment(campaign.id, updatedComment))
                .then(() => expect(store.getActions()).to.deep.equal([
                    ...requiredActionCreators,
                    { type: 'REPLACE_COMMENT', comment: updatedComment }
                ]));
        });
    });

    describe('deleteComment(campaignId: Number, commentId: Number)', () => {
        it('dispatches MAKING_API_REQUEST, SUCCESSFUL_API_REQUEST and REMOVE_COMMENT action types', () => {
            nock(url)
                .delete(`/campaigns/${campaign.id}/comments/${comment.id}`)
                .reply(204);

            return store.dispatch(deleteComment(campaign.id, comment.id))
                .then(() => expect(store.getActions()).to.deep.equal([
                    ...requiredActionCreators,
                    { type: 'REMOVE_COMMENT', commentId: comment.id }
                ]));
        });
    });
});