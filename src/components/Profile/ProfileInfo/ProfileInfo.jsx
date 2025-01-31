import React from "react";
import s from "./ProfileInfo.module.css";
import Preloader from "../../common/Preloader/Preloader";
import avatar from "../../../assets/avatar_users.jpg";
import ProfileStatusWithHooks from "./ProfileStatus/ProfileStatusWithHooks";


const ProfileInfo = ({profile, status, updateProfileStatus}) => {
    if (!profile) {
        return <Preloader/>
    }
    return (
        <div>
            <div>
                <div className={s.profileData}>
                    <div className={s.profileAvatar}>
                        <img src={profile.photos.small ? profile.photos.large : avatar} alt=""/>
                    </div>
                    <div>
                        <div>
                            <div>
                                {profile.fullName}
                            </div>
                            <ProfileStatusWithHooks status={status} updateProfileStatus={updateProfileStatus}/>
                            <div>
                                {profile.aboutMe}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default ProfileInfo;