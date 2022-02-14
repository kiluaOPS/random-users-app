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
            <Row className="user-item-description" style={{ display: "flex" }}>
              <Col style={{ flex: "0 1 200px" }}>{props.email}</Col>
              <Col style={{ flex: "1 4 300px" }}>
                {props.location.city}, {props.location.state},{" "}
                {props.location.country}
              </Col>
              
              <Col style={{ flex: "6 1 25px" }}>
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
              </Col>
            </Row>
          }
        />
      </Skeleton>
    </List.Item>
  );
}

export default UserCard;
