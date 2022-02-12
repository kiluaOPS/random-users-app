import react, { useContext } from 'react';
import { Input } from 'antd';
import { List } from 'antd'

import UserCard from './UserCard'
import UsersContext from '../../store/users-context';
const { Search } = Input;

function UsersList(props) {

    const usersContext = useContext(UsersContext)
    return (
        <>
            <Search placeholder="Search user by name " onSearch={usersContext.onFilter} size="large" />
            <List
                className="user-list"
                itemLayout="horizontal"
                loading={usersContext.isLoading}
                dataSource={usersContext.users}
                pagination={{
                    position: 'top',
                    hideOnSinglePage:true,
                    current:usersContext.pagination.page,
                    onChange: (page, size) => {
                        usersContext.onPaginationChange({page, size});
                    },
                    defaultPageSize: usersContext.pagination.size,
                    total: 75
                    }}
                renderItem={user => 
                    <UserCard 
                        uuid={user.login.uuid}
                        picture={user.picture}
                        name={user.name}
                        email={user.email}
                        nationality={user.nat}
                        gender={user.gender}
                        location={user.location}
                    /> 
                } 
            />
        </>
    );
}

export default UsersList;