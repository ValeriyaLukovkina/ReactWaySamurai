import React from 'react';
import { connect } from 'react-redux';
import { follow, requestUsers, setCurrentPage, toggleFollowingIsProgress, unfollow } from '../../redux/users-reducer';
import { getCurrentPage, getFollowingIsProgress, getIsFetching, getPageSize, getTotalUsersCount, getUsers, getUsersSuper } from '../../redux/users-selectors';
import Preloader from '../common/Preloader/Preloader';
import Users from './Users';


class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.requestUsers(this.props.currentPage, this.props.pageSize);
    }

    onPageChanged = (pageNumber) => {
        debugger
        this.props.requestUsers(pageNumber, this.props.pageSize);
    }

    render() {
        return <>
            {this.props.isFetching && <Preloader />}
            <Users
                totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                onPageChanged={this.onPageChanged}
                currentPage={this.props.currentPage}
                usersPage={this.props.usersPage}
                follow={this.props.follow}
                unfollow={this.props.unfollow}
                followingIsProgress={this.props.followingIsProgress}
                toggleFollowingIsProgress={this.props.toggleFollowingIsProgress}
            />
        </>
    }
}

// let mapStateToProps = (state) => {
//     return {
//         usersPage: state.usersPage.usersData,
//         pageSize: state.usersPage.pageSize,
//         totalUsersCount: state.usersPage.totalUsersCount,
//         currentPage: state.usersPage.currentPage,
//         isFetching: state.usersPage.isFetching,
//         followingIsProgress: state.usersPage.followingIsProgress
//     }
// }

let mapStateToProps = (state) => {
    return {
        usersPage: getUsersSuper(state),
        // usersPage: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingIsProgress: getFollowingIsProgress(state),
    }
}



export default connect(mapStateToProps,
    { follow, unfollow, setCurrentPage, toggleFollowingIsProgress, requestUsers })(UsersContainer)