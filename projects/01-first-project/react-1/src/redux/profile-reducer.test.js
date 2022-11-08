// import { expect } from "vitest";
import profileReducer, { addPostActionCreator, deletePost } from "./profile-reducer";

let state = {
    postData: [
        { id: 1, message: 'Hi, how are you', likesCount: '15' },
        { id: 2, message: "It's my first project", likesCount: '20' },
        { id: 3, message: 'bla', likesCount: '15' },
        { id: 4, message: "blabla", likesCount: '20' }
    ],
};

test('new post should be added', () => {
    let action = addPostActionCreator('hello');
    let newState = profileReducer(state, action);

    expect(newState.postData.length).toBe(5);
});

test('message of new post should be correct', () => {
    let action = addPostActionCreator('hello');
    let newState = profileReducer(state, action);

    expect(newState.postData[4].message).toBe('hello');
});

test('after deleting length of messages should be decrement', () => {
    let action = deletePost(1);
    let newState = profileReducer(state, action);

    expect(newState.postData.length).toBe(3);
});

test('after deleting length should not be decrement if id is incorrecting', () => {
    let action = deletePost(1000);
    let newState = profileReducer(state, action);

    expect(newState.postData.length).toBe(4);
});