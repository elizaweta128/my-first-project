import preloader from "../../../assets/preloader.svg";
import s from "../../common/Preloader/Preloader.module.css";
import React from "react";

const Preloader = () => {
    return (
        <div className="preloader">
            <img src={preloader} className={s.preloader} alt="preloader"/>
        </div>
    )
}

export default Preloader;