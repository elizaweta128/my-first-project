import React from "react";
import Paginator from "./../common/Paginator/Paginator";
import User from "./User/User";


const Users = ({currentPage, onPageChanged, totalItemsCount, pageSize, portionSize, ...props}) => {
    return (
        <div>
            <Paginator currentPage={currentPage} totalItemsCount={totalItemsCount} pageSize={pageSize}
                       onPageChanged={onPageChanged} portionSize={portionSize} />
            <div>
                {
                    props.users.map((u) => (
                        <User user={u} key={u.id} userKey={u.id}  follow={props.follow} unfollow={props.unfollow}
                              followingInProgress={props.followingInProgress}/>
                    ))
                }
            </div>
        </div>
    )
}


export default Users;