import { useContext } from "react";
import GithubContext from "../context/github/GithubContext";
import UserRepos from "./UserRepos";

const UserRepoList = ({ repos }) => {
  const { isOpen } = useContext(GithubContext);

  return (
    <>
      {!isOpen && (
        <div className=" w-full h-full ">
          <div className="flex flex-col p-4 w-full">
            <h1 className="text-4xl">Latest Repos</h1>
            {repos.map((repo) => (
              <UserRepos repo={repo} key={repo.id} />
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default UserRepoList;
