import React, { useEffect, useState } from "react";

const ProfileInfoStatusWithHooks = (props) => {

    let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(props.status);

    useEffect(() => {
        setStatus(props.status)
    }, [props.status])

    const activeEditMode = () => {
        setEditMode(true)
    }

    const deactiveEditMode = () => {
        setEditMode(false);
        props.updateStatus(status)
    }

    const onStatusChange = (statusMessage) => {
        setStatus(statusMessage)
    }

    return (
        <div>
            {!editMode &&
                <div>
                    <span onDoubleClick={activeEditMode}>{props.status}</span>
                </div>
            }
            {editMode &&
                <div>

                    <input
                        onChange={(e) => onStatusChange(e.currentTarget.value)}
                        autoFocus
                        onBlur={deactiveEditMode} 
                        type="text" value={status} />
                </div>
            }
        </div >
    )
}

export default ProfileInfoStatusWithHooks;