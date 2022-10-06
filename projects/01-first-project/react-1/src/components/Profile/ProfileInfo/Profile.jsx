import React from "react";
import s from './ProfileInfo.module.css'

const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtkgkskYs1tjMC9YHyGnHuC4wK4FwKzQboLA&usqp=CAU' />
            </div>
            <div className={s.description_block}>
                ava + description
            </div>
        </div>
    )
}

export default ProfileInfo;