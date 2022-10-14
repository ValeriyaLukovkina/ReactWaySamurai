import React from "react";
import Preloader from "../../common/Preloader/Preloader";
import s from './ProfileInfo.module.css'

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader />
    }

    return (
        <div>
            <div>
                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtkgkskYs1tjMC9YHyGnHuC4wK4FwKzQboLA&usqp=CAU' alt=''/>
            </div>
            <div className={s.description_block}>
                <img src={props.profile.photos.large} alt="" />
                <div>{props.profile.fullName}</div>
                <div>Контактная информация:
                    <a src={props.profile.contacts.twitter}>vk</a>
                </div>
                ava + description
            </div>
        </div>
    )
}

export default ProfileInfo;