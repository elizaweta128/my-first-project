import React from "react";
import s from "./ProfileInfo.module.css";
import Preloader from "../../common/Preloader/Preloader";
import avatar from "../../../assets/avatar_users.jpg";
import ProfileStatusWithHooks from "./ProfileStatus/ProfileStatusWithHooks";


const ProfileInfo = ({profile, status, updateProfileStatus, isOwner, savePhoto}) => {
    if (!profile) {
        return <Preloader/>
    }
    const onMainPhotoSelected = (e) => {
        if (e.target.files.length) {
            savePhoto(e.target.files[0]);
        }
    }
    return (
        <div>
            <div>
                <div className={s.profileData}>
                    <div className={s.avatarBlock}>
                        <div className={s.profileAvatar}>
                            <img src={profile.photos.large ? profile.photos.large : avatar} alt=""/>
                        </div>
                        <div className={s.uploadAvatar}>
                            {
                                isOwner && <input type="file"
                                                  onChange={onMainPhotoSelected}/>
                            }
                        </div>
                    </div>
                    <div>
                        <div>
                            <div>
                                <b>Full name: </b> {profile.fullName}
                            </div>
                            <ProfileStatusWithHooks status={status} updateProfileStatus={updateProfileStatus}/>
                            <div>
                                <b>Looking for a job:</b> {profile.lookingForAJob ? "✔" : "✖"}
                            </div>
                            <div>
                                {profile.lookingForAJob
                                    ? <div><b>My professional skills:</b>{profile.lookingForAJobDescription}</div>
                                    : undefined}
                            </div>
                            <div>
                                {profile.aboutMe ? <div><b>About me:</b> {profile.aboutMe}</div>: undefined}
                            </div>
                            <div>
                                <b>Contacts</b> : {Object.keys(profile.contacts).map(([title, value], index) => (
                                <li key={index}>
                                   <Contact title={title} value={value} />
                                </li>
                            ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

const Contact = ({contactTitle, contactValue}) => {
    return (
        <div>
            <b>{contactTitle}: </b> {contactValue}
        </div>
    )
}

export default ProfileInfo;