import React from "react";
import Moment from "react-moment";
import { Link } from "react-router-dom";

const MessageItem = ({
  date,
  title,
  category,
  removeMessage,
  isCorrectUser,
  messageId,
  userId
}) => {
  return (
    <tr>
      <td>{title}</td>
      <td>{category}</td>
      <td>
        <Moment format='Do MMMM YYYY, h:mm:ss a'>{date}</Moment>
      </td>
      <td>
        <Link
          to={`/users/${userId}/messages/${messageId}`}
          className="btn btn-secondary"
        >
          <i className="fas fa-angle-double-right" /> Details
        </Link>
        {isCorrectUser && (
          <button className="btn btn-danger ml-2" onClick={removeMessage}>
            <i className="fas fa-angle-double-right" /> Delete
          </button>
        )}
      </td>
    </tr>
  );
};

export default MessageItem;
