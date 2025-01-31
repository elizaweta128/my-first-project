import React from "react";
import s from "./Nav.module.css"
import {NavLink} from "react-router-dom";


const Nav = () => {
    return (
        <nav className={s.nav}>
            <div>
                <NavLink to="/" end className={({isActive}) => (isActive ? `${s.item} ${s.active}` : s.item)}></NavLink>
            </div>
            <div>
                <NavLink to="/profile"
                         className={({isActive}) => (isActive ? `${s.item} ${s.active}` : s.item)}>Profile</NavLink>
            </div>
            <div>
                <NavLink to="/dialogs"
                         className={({isActive}) => (isActive ? `${s.item} ${s.active}` : s.item)}>Messages</NavLink>
            </div>
            <div>
                <NavLink to="/users"
                         className={({isActive}) => (isActive ? `${s.item} ${s.active}` : s.item)}>Users</NavLink>
            </div>
            <div>
                <NavLink to="/news"
                         className={({isActive}) => (isActive ? `${s.item} ${s.active}` : s.item)}>News</NavLink>
            </div>
            <div>
                <NavLink to="/music"
                         className={({isActive}) => (isActive ? `${s.item} ${s.active}` : s.item)}>Music</NavLink>
            </div>
            <div>
                <NavLink to="/settings"
                         className={({isActive}) => (isActive ? `${s.item} ${s.active}` : s.item)}>Settings</NavLink>
            </div>
        </nav>
    );
}

export default Nav;