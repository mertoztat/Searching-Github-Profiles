import React from "react";
import { Link } from "react-router-dom";

const User = ({ user: { login, avatar_url } }) => {
  return (
    <div className="card shadow-md compact side bg-base-100">
      <div className="flex flex-row items-center space-x-4 card-body">
        <div className="avatar">
          <div className="rounded-full shadow w-14 h-14">
            <img src={avatar_url} alt="User Avatar" />
          </div>
        </div>

        <div className="card-title flex-col">
          {login}
          <Link
            to={`/user/${login}`}
            className="text-base-content text-opacity-40 text-sm"
          >
            Visit Profile
          </Link>
        </div>
      </div>
    </div>
  );
};

export default User;
