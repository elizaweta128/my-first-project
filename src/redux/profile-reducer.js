import {profileAPI} from "../api/api";

const ADD_POST = "ADD_POST";
const SET_USER_PROFILE = "SET_USER_PROFILE";
const SET_PROFILE_STATUS = "SET_PROFILE_STATUS";
const DELETE_POST = "DELETE_POST";
const SAVE_PHOTO_SUCCESS = "SAVE_PHOTO_SUCCESS";

let initialState = {
    posts: [
        {id: 1, message: "What is your name?", likesCount: 6},
        {id: 2, message: "it`s a good day", likesCount: 4},
    ],
    profile: null,
    status: "",
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: state.posts.length + 1,
                message: action.newPostText,
                likesCount: 3,
            }
            return {
                ...state,
                posts: [...state.posts, newPost],
            }
        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile,
            }
        case SET_PROFILE_STATUS:
            return {
                ...state,
                status: action.status,
            }
        case DELETE_POST:
            return {
                ...state,
                posts: state.posts.filter(post => post.id !== action.postId),
            }
            case SAVE_PHOTO_SUCCESS:
                return {
                    ...state,
                    profile: {...state.profile, photos: action.photos},
                }
        default:
            return state;
    }
}

export const addPost = (newPostText) => ({
    type: ADD_POST,
    newPostText,
});

export const setUserProfile = (profile) => ({
    type: SET_USER_PROFILE,
    profile,
})

export const setProfileStatus = (status) => ({
    type: SET_PROFILE_STATUS,
    status,
})

export const deletePost = (postId) => ({
    type: DELETE_POST,
    postId,
})

export const savePhotoSuccess = (photos) => ({
    type: SAVE_PHOTO_SUCCESS,
    photos,
})

export const getUserProfile = (userId) => async (dispatch) => {
    let data = await profileAPI.setUser(userId)
    dispatch(setUserProfile(data));
}

export const getProfileStatus = (userId) => async (dispatch) => {
    let res = await profileAPI.getProfileStatus(userId)
    dispatch(setProfileStatus(res.data));
}

export const updateProfileStatus = (status) => async (dispatch) => {
    let res = await profileAPI.updateProfileStatus(status)
    if (res.data.resultCode === 0) {
        dispatch(setProfileStatus(status));
    }
}

export const savePhoto = (file) => async (dispatch) => {
    let res = await profileAPI.savePhoto(file)
    if (res.data.resultCode === 0) {
        dispatch(savePhotoSuccess(res.data.data.photos));
    }
}


export default profileReducer;

