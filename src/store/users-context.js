import react, { useState, useEffect }from "react";

import { apiProvider } from "../api/provider";

const UsersContext = react.createContext({
    isLoading: false,
    pagination: {},
    onUserDelete: (uuid) => {},
    onFilter: (searchParameter) => {},
    onPaginationChange: (pagination) => {}
});

export const UsersContextProvider = (props) => {
    
    const [users, setUsers] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [pagination, setPage] = useState({
        page: 1,
        size: 15
    });
    
    async function _getUsers() {
        setIsLoading(true);
        try {
            var usersResponse = await apiProvider.get(`?seed=abc&results=${pagination.size}&page=${pagination.page}`)
            console.log(usersResponse.results)
            setUsers(usersResponse.results)

        } catch (error){
            console.error(error)
        } finally {
            setIsLoading(false);
        }
    }
    
    useEffect(() => {
        _getUsers();
     }, [pagination])

    const handleDelete = (uuid) => {
        setUsers((prevState) => {
            return prevState.filter(user => user.login.uuid != uuid);
        })
        // Delete api call here
    }

    const handlePaginationChange = pagination => {
        console.log(pagination)
        setPage(pagination);
    }

    const handleFilter = searchparameter => {
        setUsers((prevState) => {
            return prevState.filter(user => user.name.first.toLowerCase().startsWith(searchparameter));
        });
    }

    return (
        <UsersContext.Provider
            value={{
                users: users,
                isLoading: isLoading,
                pagination: pagination,
                onUserDelete: handleDelete,
                onFilter: handleFilter,
                onPaginationChange: handlePaginationChange
            }}
        >
            {props.children}
        </UsersContext.Provider>
    )
};


export default UsersContext;