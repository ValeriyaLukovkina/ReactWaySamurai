import React from "react";
import { connect } from "react-redux";
import { getProfile, getStatus, updateStatus } from "../../redux/profile-reducer";
import Profile from "./Profile"; 
import { useParams } from 'react-router-dom';
import { WithAuthRedirerct } from "../../hoc/withAuthRedirect";

class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.params.userId;
        if (!userId) {
            userId = 2;
        }
        this.props.getProfile(userId)
        this.props.getStatus(userId)
    }

    render() {
        return (
            <Profile {...this.props} profile={this.props.profile} status={this.props.status} updateStatus={this.props.updateStatus}/>
        )
    }
}

let AuthRedirectComponent = WithAuthRedirerct(ProfileContainer);

const mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status
    }
}

const WithUrlDataContainerComponent = (props) => {
    return (
        <AuthRedirectComponent {...props} params={useParams()}/>
    )
}

export default connect(mapStateToProps, {getProfile, getStatus, updateStatus})(WithUrlDataContainerComponent);