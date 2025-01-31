import profileReducer, {addPost, deletePost} from "./profile-reducer";


let state = {
    posts: [
        {id: 1, message: "What is your name?", likesCount: 6},
        {id: 2, message: "it`s a good day", likesCount: 4},
    ],
    profile: null,
    status: "",
};

test('length of posts should be incremented', () => {
    let action = addPost("hello");
    let newState = profileReducer(state, action);

    expect(newState.posts.length).toBe(3);
});

test('message of new post should be correct', () => {
    let action = addPost("hello");
    let newState = profileReducer(state, action);

    expect(newState.posts[2].message).toBe("hello");
});

test('after deleting length of messages should be decrement', () => {
    let action = deletePost(1);
    let newState = profileReducer(state, action);

   expect(newState.posts.length).toBe(1);
});
