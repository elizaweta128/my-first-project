import React, {useEffect} from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {useNavigate, useParams} from "react-router-dom";
import {
    getProfileStatus,
    getUserProfile, savePhoto,
    updateProfileStatus
} from "../../redux/profile-reducer";
import {compose} from "redux";


const ProfileContainer = (props) => {
    const {authUserId, getUserProfile, getProfileStatus} = props;
    const params = useParams();
    const navigate = useNavigate();
    useEffect(() => {
        let userId = params.userId || authUserId;
        if (!userId) return navigate("/login");
        getUserProfile(userId);
        getProfileStatus(userId);
    }, [params.userId, authUserId, navigate, getUserProfile, getProfileStatus]);
    return (
        <Profile {...props}
                 isOwner={!params.userId}/>
    )


}

let mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status,
        isAuth: state.auth.isAuth,
        authUserId: state.auth.userId,
    }
}


export default compose(
    connect(mapStateToProps, {getUserProfile, getProfileStatus, updateProfileStatus, savePhoto}),
)(ProfileContainer);

