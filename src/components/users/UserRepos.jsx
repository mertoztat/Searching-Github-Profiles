import { FaEye, FaLink, FaStar } from "react-icons/fa";

const UserRepos = ({ repo, isOpen }) => {
  const { name, description, html_url, stargazers_count } = repo;

  console.log("repos", isOpen);

  return (
    <>
      <div className="mt-4 rounded-lg card bg-base-200 hover:bg-base-300">
        <div className="card-body">
          <h3 className="mb-2 text-xl font-semibold">
            <a href={html_url}>
              <FaLink className="inline mr-1" /> {name}
            </a>
          </h3>
          <p className="mb-3">{description}</p>
          <div>
            <div className="mr-2 badge badge-outline badge-lg">
              <FaEye className="mr-2" /> {name}
            </div>
            <div className="mr-2 badge badge-warning badge-outline badge-lg">
              <FaStar className="mr-2" /> {stargazers_count}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserRepos;
