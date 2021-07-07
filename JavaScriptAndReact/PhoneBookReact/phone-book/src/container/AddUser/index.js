import React from "react";
import "./style.scss";

export default function AddUser() {
  const submitUser = (e) => {
    e.preventDefault();
  };

  return (
    <div className={"container-form"}>
      <form onSubmit={submitUser}>
        <input
          type="text"
          placeholder={"First name"}
        />
        <input
          type="text"
          placeholder={"Last name"}
        />
        <input
          type="tel"
          placeholder={"Phone number"}
        />
        <button type="submit">Add user</button>
      </form>
    </div>
  );
}
