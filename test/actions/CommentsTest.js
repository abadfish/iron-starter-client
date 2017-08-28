import { expect } from 'chai';
import uuid from 'uuid';
import thunk from 'redux-thunk';
import nock from 'nock';
import configureMockStore from 'redux-mock-store';
import { setComments, addComment, removeComment, replaceComment } from '../../src/actions/comments';

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
    describe('getComments()', () => {
        it('')
    })
});