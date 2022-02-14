import React from "react";
import { Link } from "react-router-dom";
import { Avatar, Col, Row, Skeleton, Image } from "antd";
import {
  WomanOutlined,
  ManOutlined,
  DeleteOutlined,
} from "@ant-design/icons";

import "./UserCard.scss";

function UserCard(props) {
  return (
    <>
      
    <Row className="list-item">
      <Col flex="4 4 40vw">
        <Link to={`/users/${props.uuid}`}>
          <li >
            <div>
              <Avatar
                  size={{ xs: 55, sm: 60, md: 65, lg: 75, xl: 75, xxl: 75 }}
                  src={props.picture.large}
                />
            </div>
            <div className="list-item-content">
              <h4>{props.name.first} {props.name.last}</h4>
              <p>{props.email}</p>
            </div>
          </li>
        </Link>
      </Col>
      <Col flex="4 4 40vw" className="list-item-content" >
        <p>{props.location.country}, {props.location.state}, {props.location.city}</p>
      </Col>
      <Col flex="0 0 10vw" className="list-item-content" >
        <DeleteOutlined
          style={{ color: "#eb008b"}}
          onClick={() => props.onDelete(props.uuid)}
        />
      </Col>
    </Row>
  </>
  );
}

export default UserCard;

/*
<List.Item
      key={props.uuid}
      className="user-item"
      actions={[
        <DeleteOutlined
          style={{ color: "#eb008b" }}
          onClick={() => props.onDelete(props.uuid)}
        />,
      ]}
    >
      <Skeleton avatar title={false} loading={props.isLoading} active>
        <List.Item.Meta
          avatar={
            <Link to={`/users/${props.uuid}`}>
              <Avatar
                size={{ xs: 60, sm: 80, md: 80, lg: 80, xl: 80, xxl: 80 }}
                src={props.picture.large}
              />
            </Link>
          }
          title={
            <Link to={`/users/${props.uuid}`}>
              {props.name.first} {props.name.last}
              <span style={{ marginLeft: 5 }}>
                {props.gender === "female" ? <WomanOutlined /> : <ManOutlined />}
              </span>
            </Link>
          }
          description={
            <>
              <span>{props.email}</span>
              <br />
              <span>
                {props.location.country}, {props.location.state},{" "}
                {props.location.city}
              </span>
              <span>
                {props.nationality === "CH" ? (
                  <Image
                    preview={false}
                    alt="CH"
                    src="./switzerland-flag.png"
                    height={15}
                    style={{ paddingLeft: 5 }}
                  />
                ) : (
                  ""
                )}
              </span>
            </>
          }
        />
      </Skeleton>
    </List.Item>
**/
