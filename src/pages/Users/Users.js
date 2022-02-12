import React, { useContext, useEffect, useState } from 'react';
import { Route, Routes } from "react-router-dom";
import { List } from 'antd'

import {apiProvider} from '../../api/provider'
import UserDetail from '../../components/Users/UserDetail';
import UsersList from '../../components/Users/UsersList';
import UsersContext, { UsersContextProvider}  from '../../store/users-context';

function Users(props) {


    return (
        
        <UsersContextProvider>
            <Routes>
                <Route index element={ <UsersList/> }/>
                <Route path={":userId"} element={<UserDetail  />} />
            </Routes>
        </UsersContextProvider>
    );
}

export default Users;