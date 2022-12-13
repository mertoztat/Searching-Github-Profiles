import { useContext } from "react";
import GithubContext from "../context/github/GithubContext";
import User from "./User";
import spinner from "../../assets/spinner.gif";

const UserList = () => {
  const { users, isLoading } = useContext(GithubContext);

  return (
    <>
      {isLoading ? (
        <img className="w-[100px] mx-auto" src={spinner} alt="" />
      ) : (
        <div className="grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 ">
          {users.map((user) => (
            <User key={user.id} user={user} />
          ))}
        </div>
      )}
    </>
  );
};

export default UserList;
