
import test from "node:test";
import Paginator from "./projects/01-first-project/react-1/src/components/common/Paginator/Paginator";

let state = {
    postData: [
        { id: 1, message: 'Hi, how are you', likesCount: '15' },
        { id: 2, message: "It's my first project", likesCount: '20' },
        { id: 3, message: 'bla', likesCount: '15' },
        { id: 4, message: "blabla", likesCount: '20' }
    ],
};

describe('Paginator components tests', () => {
    test('pages count is 11 but should be showed only 10' ,() => {
        const component = create(<Paginator totalUsersCount={11} pageSize={1} portionSize={10}/>);
        const root = component.root;
        let spans = root.findAllByType('span');

    let action = addPostActionCreator('hello');
    let newState = profileReducer(state, action);        
    })


    expect(newState.postData.length).toBe(5);
});