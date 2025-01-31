import React from "react";
import s from "./User.module.css";
import {NavLink} from "react-router-dom";
import avatar from "../../../assets/avatar_users.jpg"


const User = (props) => {
    return (
        <div>
            {
                <div>
                    <div>
                        <div className={s.imageBlock}>
                            <NavLink to={`/profile/${props.user.id}`}>
                                <img src={props.user.photos.small ? props.user.photos.small : avatar} alt=""/>
                            </NavLink>
                        </div>
                        <div>
                            {props.user.followed
                                ? <button disabled={props.followingInProgress.some(id => id === props.user.id)}
                                          onClick={() => {
                                              props.unfollow(props.user.id)
                                          }}>Unfollow</button> :
                                <button disabled={props.followingInProgress.some(id => id === props.user.id)}
                                        onClick={() => {
                                            props.follow(props.user.id)
                                        }}>Follow</button>}
                        </div>
                    </div>
                    <div>
                        <div>
                            <div>
                                {props.user.name}
                            </div>
                            <div>
                                {props.user.status}
                            </div>
                        </div>
                        <div>
                            <div>
                                {"u.location.country"}
                            </div>
                            <div>
                                {"u.location.city"}
                            </div>
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}


export default User;