import React from "react";
import s from "./Header.module.css";
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return (
        <header className={s.header}>
            <div>
                <img src="" alt=""/>
            </div>
            <div className={s.loginBlock}>
                {
                    props.isAuth
                        ? <div>
                            <span className={s.login}>{props.login}</span>
                            <button className={s.logoutButton} onClick={props.logout}>Logout</button>
                        </div>
                        : <NavLink to="/login" className={s.loginButton}>Login</NavLink>
                }
            </div>
        </header>
    );
}


export default Header;