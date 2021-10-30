import React from 'react';

const UsersItem = ({user}) => {
    return (
        <div className='user-item'>
            {user.id}. {user.name}
        </div>
    );
};

export default UsersItem;