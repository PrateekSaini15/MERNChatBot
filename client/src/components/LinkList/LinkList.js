import React from "react";

import "./LinkList.css";

const LinkList = (props) => {
  const users = props.actionProvider.getUsers();
  console.log(users);
  const linkMarkup = users.map((user) => (
    <li key={user.id} className="link-list-item">
      <a
        href={user.name}
        target="_blank"
        rel="noopener noreferrer"
        className="link-list-item-url"
      >
        {user.name}
      </a>
    </li>
  ));

  return <ul className="link-list">{linkMarkup}</ul>;
};

export default LinkList;
