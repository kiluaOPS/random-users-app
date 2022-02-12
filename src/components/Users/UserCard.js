import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Avatar, List, Skeleton, Image,Popconfirm } from 'antd'
import { WomanOutlined, ManOutlined, DeleteOutlined, EyeOutlined } from '@ant-design/icons';

import UsersContext from '../../store/users-context';
import './UserCard.scss'

function UserCard(props) {

    const ctx = useContext(UsersContext);
    
    return (
        <List.Item
        key={props.uuid}
        className="user-item"
        actions={
            [<Link to={`/users/${props.uuid}`}><EyeOutlined /></Link>,
             <Popconfirm title="Are you sure？" icon={<DeleteOutlined style={{ color: 'red' }} onClick={() => ctx.onDelete(props.uuid)} />}>
                <DeleteOutlined/>
            </Popconfirm>]}
        >
        <Skeleton avatar title={false} loading={props.isLoading} active>
            <List.Item.Meta
                avatar={<Avatar size={80} src={props.picture.large} />}
                title={
                    <>
                        {props.name.first} {props.name.last}
                        {props.nationality == 'CH' ? 
                            <Image preview={false} alt="CH" src='./switzerland-flag.png' height={20} style={{paddingLeft: 5}} /> : ''
                        }
                    </>}
                description={<p>{props.email}</p>}
            />
            <div style={{alignItems: "center"}}>
                <span>{props.gender == 'female' ? <WomanOutlined /> : <ManOutlined />}</span>
                <span>{props.location.country}, {props.location.city}</span>
            </div>
        </Skeleton>
        </List.Item>
    );
}

export default UserCard;

