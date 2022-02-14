import React from "react";
import { Link } from "react-router-dom";
import { Avatar, List, Skeleton, Image, Row, Col } from "antd";
import { WomanOutlined, ManOutlined, DeleteOutlined } from "@ant-design/icons";

import "./UserCard.scss";

function UserCard(props) {
  return (
    <List.Item
      key={props.uuid}
      className="user-item"
      actions={[
        <div className="user-item-action">
        <DeleteOutlined
          style={{ display: "block"}}
          onClick={() => props.onDelete(props.uuid)}
        />
        Delete
        </div>,
      ]}
    >
      <Skeleton avatar title={false} loading={props.isLoading} active>
        <List.Item.Meta
          avatar={
            <Link to={`/users/${props.uuid}`}>
              <Avatar
                size={{ xs: 80, sm: 80, md: 80, lg: 80, xl: 90, xxl: 100 }}
                src={props.picture.large}
              />
            </Link>
          }
          title={
            <Link to={`/users/${props.uuid}`}>
              {props.name.first} {props.name.last}
              <span style={{ marginLeft: 5 }}>
                {props.gender === "female" ? (
                  <WomanOutlined />
                ) : (
                  <ManOutlined />
                )}
              </span>
            </Link>
          }
          description={
            <Row className="user-item-description">
              <Col className="user-item-description-email">{props.email}</Col>
              <Col style={{ flex: "1 6 auto"}}>
                <p>{props.location.street?.number} {props.location.street?.name}, {props.location.postcode}
                <br/>
                {props.location.city}, {props.location.state},{" "}
                {props.location.country}
                </p>
              </Col>
              
              <Col style={{ flex: "6 1 30px" }}>
                {props.nationality === "CH" ? (
                  <Image
                    preview={false}
                    alt="CH"
                    src="./switzerland-flag.png"
                    
                  />
                ) : (
                  ""
                )}
              </Col>
            </Row>
          }
        />
      </Skeleton>
    </List.Item>
  );
}

export default UserCard;
