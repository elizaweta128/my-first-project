import React, {useEffect} from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {useNavigate, useParams} from "react-router-dom";
import {
    getProfileStatus,
    getUserProfile,
    updateProfileStatus
} from "../../redux/profile-reducer";
import {compose} from "redux";



const ProfileContainer = (props) => {
    const params = useParams();
    const navigate = useNavigate();
    useEffect(() => {
        let userId = params.userId || props.authUserId;
        if (!userId) return navigate("/login");
        props.getUserProfile(userId);
        props.getProfileStatus(userId);
    }, [params.userId, props.authUserId, navigate]);
    return (
        <Profile {...props} profile={props.profile}/>
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
    connect(mapStateToProps, {getUserProfile,getProfileStatus, updateProfileStatus}),
   )(ProfileContainer);

