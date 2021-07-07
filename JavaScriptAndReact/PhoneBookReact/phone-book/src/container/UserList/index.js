import React from "react";
import List from "../../component/List";
import "./style.scss";

export default function UserList() {
  const dummyList = [
    { first_name: "Vinay", last_name: "Rajput", phone_number: "888888" }
  ];
  return (
    <>
      <List list={dummyList} />
    </>
  );
}
