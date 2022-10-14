// import React from 'react';
// import s from './Users.module.css';
// // import axios from 'axios';
// import userPhoto from './../../assets/images/user.png';

// class Users extends React.Component {
//     componentDidMount() {
//         let users = [
//             { id: 1, followed: false, fullname: 'Lera', status: 'I am Lera', location: { city: 'Kuta', country: 'Indonesia' } },
//             { id: 2, followed: false, fullname: 'Ivan', status: 'I am Ivan', location: { city: 'spb', country: 'Russia' } },
//             { id: 3, followed: true, fullname: 'Ilya', status: 'I am Ilya', location: { city: 'Limasol', country: 'Cyprus' } },
//             { id: 4, followed: false, fullname: 'Katya', status: 'I am Katya', location: { city: 'Kuta', country: 'Indonesia' } },
//             { id: 5, followed: false, fullname: 'Arina', status: 'I am Arina', location: { city: 'spb', country: 'Russia' } },
//             { id: 6, followed: true, fullname: 'Alina', status: 'I am Alina', location: { city: 'Limasol', country: 'Cyprus' } },
//             { id: 7, followed: false, fullname: 'Serg', status: 'I am Serg', location: { city: 'Kuta', country: 'Indonesia' } },
//             { id: 8, followed: false, fullname: 'Oksana', status: 'I am Oksana', location: { city: 'spb', country: 'Russia' } },
//             { id: 9, followed: true, fullname: 'Nata', status: 'I am Nata', location: { city: 'Limasol', country: 'Cyprus' } },
//             { id: 10, followed: false, fullname: 'Kolya', status: 'I am Kolya', location: { city: 'Kuta', country: 'Indonesia' } },
//             { id: 11, followed: false, fullname: 'Larisa', status: 'I am Larisa', location: { city: 'spb', country: 'Russia' } },
//             { id: 12, followed: true, fullname: 'Valera', status: 'I am Valera', location: { city: 'Limasol', country: 'Cyprus' } },
//         ]
//         this.props.setUsers(users.slice(0, 5))

//         this.props.setTotalUserCount(users.length)
//     }

//     onPageChanged = (pageNumber) => {
//         let users = [
//             { id: 1, followed: false, fullname: 'Lera', status: 'I am Lera', location: { city: 'Kuta', country: 'Indonesia' } },
//             { id: 2, followed: false, fullname: 'Ivan', status: 'I am Ivan', location: { city: 'spb', country: 'Russia' } },
//             { id: 3, followed: true, fullname: 'Ilya', status: 'I am Ilya', location: { city: 'Limasol', country: 'Cyprus' } },
//             { id: 4, followed: false, fullname: 'Katya', status: 'I am Katya', location: { city: 'Kuta', country: 'Indonesia' } },
//             { id: 5, followed: false, fullname: 'Arina', status: 'I am Arina', location: { city: 'spb', country: 'Russia' } },
//             { id: 6, followed: true, fullname: 'Alina', status: 'I am Alina', location: { city: 'Limasol', country: 'Cyprus' } },
//             { id: 7, followed: false, fullname: 'Serg', status: 'I am Serg', location: { city: 'Kuta', country: 'Indonesia' } },
//             { id: 8, followed: false, fullname: 'Oksana', status: 'I am Oksana', location: { city: 'spb', country: 'Russia' } },
//             { id: 9, followed: true, fullname: 'Nata', status: 'I am Nata', location: { city: 'Limasol', country: 'Cyprus' } },
//             { id: 10, followed: false, fullname: 'Kolya', status: 'I am Kolya', location: { city: 'Kuta', country: 'Indonesia' } },
//             { id: 11, followed: false, fullname: 'Larisa', status: 'I am Larisa', location: { city: 'spb', country: 'Russia' } },
//             { id: 12, followed: true, fullname: 'Valera', status: 'I am Valera', location: { city: 'Limasol', country: 'Cyprus' } },
//         ]
//         this.props.setCurrentPage(pageNumber);
//         if (pageNumber === 2) {
//             this.props.setUsers(users.slice(5, 10))
//         } else if (pageNumber === 3) {
//             this.props.setUsers(users.slice(10, 12))
//         } else {
//             this.props.setUsers(users.slice(0, 5))
//         }
//     }

//     render() {
//         let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);

//         let pages = [];
//         for (let i = 1; i <= pagesCount; i++) {
//             pages.push(i)
//         }

//         return (
//             <div>
//                 {pages.map((p) => {
//                     return (
//                         <span
//                             onClick={() => this.onPageChanged(p)}
//                             className={this.props.currentPage === p && s.selected}>{p}</span>
//                     )
//                 })}

//                 {
//                     this.props.usersPage.map((user) => {
//                         return <div key={user.id}>
//                             <span>
//                                 <div>
//                                     <img src={
//                                         // user.photo.small =! null ? user.photo.small : 
//                                         userPhoto} alt='' />
//                                 </div>
//                                 {user.followed
//                                     ? <button onClick={() => { this.props.follow(user.id) }}>follow</button>
//                                     : <button onClick={() => { this.props.unfollow(user.id) }}>unfollow</button>}
//                             </span>
//                             <span>
//                                 <span>
//                                     <div>{user.fullName}</div>
//                                     <div>{user.status}</div>
//                                 </span>
//                                 <span>
//                                     <div>{user.location.city}</div>
//                                     <div>{user.location.country}</div>
//                                 </span>
//                             </span>
//                         </div>
//                     })
//                 }
//             </div>
//         )
//     }
// }

// export default Users;