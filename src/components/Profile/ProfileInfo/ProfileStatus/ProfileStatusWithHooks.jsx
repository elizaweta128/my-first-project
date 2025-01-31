import React, {useEffect, useState} from "react";

const ProfileStatusWithHooks = (props) => {
    let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(props.status || "");

    let activateEditMode = () => {
        setEditMode(true);
    };
    let deactivateEditMode = () => {
        setEditMode(false);
        props.updateProfileStatus(status);
    };
    useEffect(() => {
        setStatus(props.status || "");
    }, [props.status]);
    let onStatusChange = (e) => {
        setStatus(e.currentTarget.value);
    };
    return (
        <div>
            {
                editMode
                    ? <div>
                        <input type="text" autoFocus={true} onBlur={deactivateEditMode} value={status}
                               onChange={onStatusChange}/>
                    </div>
                    : <div>
                        <span onDoubleClick={activateEditMode}>{props.status ? props.status : "no status"}</span>
                    </div>
            }
        </div>
    )
}


export default ProfileStatusWithHooks;