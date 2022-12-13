import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useContext } from "react";
import GithubContext from "../components/context/github/GithubContext";
import {
  FaUserFriends,
  FaUsers,
  FaGlobe,
  FaLocationArrow,
  FaTwitter,
  FaUserAlt,
  FaBuilding,
  FaHandSparkles,
  FaArrowAltCircleLeft,
  FaArrowAltCircleRight,
} from "react-icons/fa";
import UserRepoList from "../components/users/UserRepoList";

const UserDetailPage = () => {
  const { login } = useParams();

  const { user, getUser, repos, getUserRepo, isOpen, handleClick } =
    useContext(GithubContext);

  // destructing the user
  const {
    name,
    company,
    avatar_url,
    location,
    blog,
    twitter_username,
    html_url,
    followers,
    following,
  } = user;

  useEffect(() => {
    getUser(login);
    getUserRepo(login);
  }, []);

  return (
    <div className="flex  bg-slate-600 0 ">
      <div className="w-10 sticky top-0 left-0 h-screen shadow-md bg-neutral p-4 sm:w-72">
        {/* image card */}
        <div className="flex-col justify-center items-center w-full p-2 hidden sm:flex">
          <img className="rounded-full w-full" src={avatar_url} alt="" />
          {/* card description */}
          <div className="w-full flex flex-col items-center text-center mt-6">
            <ul className="w-full">
              {login && (
                <div className="flex items-center justify-center gap-1 list">
                  <FaUserAlt />
                  <li className="pl-1">{login}</li>
                </div>
              )}
              {name && (
                <div className="flex items-center justify-center gap-1 list">
                  <FaHandSparkles />
                  <li className="pl-1">{name}</li>
                </div>
              )}
              <div className="flex justify-center items-center gap-3 list">
                {followers && (
                  <div className="flex items-center justify-center gap-1">
                    <FaUserFriends />
                    <li>{followers}</li>
                  </div>
                )}
                {following && (
                  <div className="flex items-center justify-center gap-1">
                    <FaUsers />
                    <li>{following}</li>
                  </div>
                )}
              </div>
              {company && (
                <div className="flex items-center justify-center gap-1 list">
                  <FaBuilding />
                  <li className="pl-1">{company}</li>
                </div>
              )}
              {location && (
                <div className="flex items-center justify-center gap-1 list">
                  <FaLocationArrow />
                  <li className="pl-1">{location}</li>
                </div>
              )}
              {blog && (
                <div className="flex items-center justify-center gap-1 list">
                  <FaGlobe />
                  <li className="mx-1">
                    <a href={blog} rel="noreferrer" target="_blank">
                      {blog}
                    </a>
                  </li>
                </div>
              )}
              {twitter_username && (
                <div className="flex items-center justify-center gap-1 list">
                  <FaTwitter />
                  <li className="mx-1">{twitter_username}</li>
                </div>
              )}
            </ul>
          </div>
        </div>
        {/* Sidebar Open/Close Menu */}
        <div
          className="cursor-pointer sm:hidden z-20  relative w-screen h-screen"
          onClick={handleClick}
        >
          {isOpen ? (
            <FaArrowAltCircleLeft
              className="text-gray-200 absolute top-0 right-14"
              size={30}
            />
          ) : (
            <FaArrowAltCircleRight
              className="text-gray-200 absolute top-0 left-1 "
              size={30}
            />
          )}
        </div>
        {/* Mobile Menu */}
        <ul
          className={
            !isOpen
              ? "hidden"
              : "absolute top-0 left-0 flex flex-col text-gray-300 duration h-screen w-screen bg-neutral items-center justify-center transition duration-300 ease-in-out"
          }
        >
          {/* Mobile Menu List */}
          <div className="flex flex-col items-center justify-center gap-1 list ">
            <img
              className="rounded-full w-full max-w-[100px]"
              src={avatar_url}
              alt=""
            />
            <div className="flex justify-center items-center w-full pt-4">
              <FaUserAlt className="text-xs" />
              <li className="pl-1 text-md">
                <a href={html_url} rel="noreferrer" target="_blank">
                  {login}
                </a>
              </li>
            </div>
            <div className="flex justify-center items-center w-full pt-4">
              <FaUserFriends className="text-sm" />
              <li className="pl-1 text-sm pr-3">{followers}</li>
              <FaUsers className="text-sm" />
              <li className="pl-1 text-sm">{following}</li>
            </div>
          </div>
        </ul>
      </div>

      <UserRepoList repos={repos} />
    </div>
  );
};

export default UserDetailPage;
