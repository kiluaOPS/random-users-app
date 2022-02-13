import React from "react";

function UserDetail(props) {
  return (
    <div style={{ padding: "25px"}}>
      <h2>Component under construction</h2>
      <h3>User Details</h3>
      <p>{JSON.stringify(props.user, null, "\t")}</p>
    </div>
  );
}

export default UserDetail;
