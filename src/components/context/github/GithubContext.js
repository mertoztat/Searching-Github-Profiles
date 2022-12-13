import { createContext, useState, useReducer } from "react";
import githubReducer from "./GithubReducer";

const GithubContext = createContext();

const GITHUB_URL = process.env.REACT_APP_GITHUB_URL;
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;

export const GithubProvider = ({ children }) => {
  const initialState = {
    users: [],
    repos: [],
    user: {},
    isLoading: false,
  };

  const [state, dispatch] = useReducer(githubReducer, initialState);

  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  // Get search results
  const searchUsers = async (text) => {
    setLoading();
    const response = await fetch(`${GITHUB_URL}/search/users?q=${text}`, {
      headers: {
        Authorization: `token ${GITHUB_TOKEN}`,
      },
    });

    const { items } = await response.json();

    dispatch({ type: "GET_USERS", payload: items });
  };

  // Get Single User Fetch Results
  // Get search results
  const getUser = async (login) => {
    setLoading();
    const response = await fetch(`${GITHUB_URL}/users/${login}`, {
      headers: {
        Authorization: `token ${GITHUB_TOKEN}`,
      },
    });

    if (response.status === 404) {
      window.location = "/notfound";
    } else {
      const data = await response.json();
      dispatch({ type: "GET_USER_DETAIL", payload: data });
    }
  };

  // Get Single User Repo
  const getUserRepo = async (login) => {
    setLoading();
    const response = await fetch(
      `${GITHUB_URL}/users/${login}/repos?sort=created&direction=desc`,
      {
        headers: {
          Authorization: `token ${GITHUB_TOKEN}`,
        },
      }
    );

    if (response.status === 404) {
      window.location = "/notfound";
    } else {
      const data = await response.json();
      dispatch({ type: "GET_USER_REPO", payload: data });
    }
  };

  // Set Loading
  const setLoading = () => dispatch({ type: "SET_LOADING" });

  // delete users from the ui
  const clearUsers = () => dispatch({ type: "DELETE_USERS" });

  return (
    <GithubContext.Provider
      value={{
        users: state.users,
        repos: state.repos,
        user: state.user,
        isLoading: state.isLoading,
        searchUsers,
        getUser,
        clearUsers,
        getUserRepo,
        handleClick,
        isOpen,
        setIsOpen,
      }}
    >
      {children}
    </GithubContext.Provider>
  );
};

export default GithubContext;
