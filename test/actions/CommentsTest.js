import { expect } from 'chai';
import uuid from 'uuid';
import thunk from 'redux-thunk';
import nock from 'nock';
import configureMockStore from 'redux-mock-store';
import 'isomorphic-fetch';
import { setComments, addComment, removeComment, replaceComment, fetchCommentsForCampaignWithId } from '../../src/actions/comments';

describe('Action Creator Tests for Comments', () => {
    describe('setComments(comments: Array<Object>)', () => {
        it("should return an Object with a type of 'SET_COMMENTS', and an Array of comment Objects", () => {
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
        it("should return an Object with a type of 'ADD_COMMENT' and a comment Object", () => {
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

    describe('removeComment(commentId: Number)', () => {
        it("should return an Object with a type of 'REMOVE_COMMENT', and a commendId Number", () => {
            expect(removeComment(1)).to.deep.equal({
                type: 'REMOVE_COMMENT', 
                commentId: 1
            });
        });
    });

    describe('replaceComment(comment: Object)', () => {
        it("should return an Object with a type of 'REPLACE_COMMENT' and a comment Object", () => {
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
});

describe('Async Action Creator Tests for Comments', () => {
    let middlewares;
    let mockStore;
    let initialState;
    let comments;
    let campaignId;

    beforeEach(() => {
        middlewares = [thunk];
        mockStore = configureMockStore(middlewares);
        initialState = {
            campaigns: [
                {
                    id: uuid(),
                    title: 'Test Title', 
                    description: 'Test Description',
                    goal: 450000,
                    pledged: 45,
                    deadeline: new Date(),
                    comments: []
                }
            ]
        };
        comments = [
            { id: uuid(), content: 'First Comment', created_at: "2017-08-28T20:33:07.449Z", updated_at: "2017-08-28T20:33:07.449Z" },
            { id: uuid(), content: 'Second Comment', created_at: "2017-08-28T20:33:07.449Z", updated_at: "2017-08-28T20:33:07.449Z" }
        ];
        campaignId = initialState.campaigns[0].campaignId;
    });

    afterEach(() => nock.cleanAll());

    describe('fetchCommentsForCampaignWithId(campaignId: Number)', () => {
        it('dispatches REQUESTING_API_DATA, SUCCESSFUL_API_REQUEST and SET_COMMENTS action types when getting comments', () => {
            nock('http://localhost:3001/api')
                .get(`/campaigns/${campaignId}/comments`)
                .reply(200, comments)

            const store = mockStore(initialState)

            return store.dispatch(fetchCommentsForCampaignWithId(campaignId))
                .then(() => expect(store.getActions()).to.deep.equal([
                    { type: 'MAKING_API_REQUEST' },
                    { type: 'SUCCESSFUL_API_REQUEST' },
                    { type: 'SET_COMMENTS', comments }
                ]));
        });
    });
});