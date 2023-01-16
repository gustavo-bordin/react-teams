import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import NavBar from "../../components/navbar";
import Centralizer from "../../components/centralizer";
import { getUsers } from "../../api";
import Loading from "../../components/loading";

function Details(props) {
  const [user, setUser] = useState({});
  const { userId } = useParams();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getUsers(userId).then((user) => {
      setUser(user);
      setIsLoading(false);
    });
  }, [userId]);

  return (
    <>
      <NavBar />
      {isLoading ? (
        <Loading />
      ) : (
        <Centralizer>
          <div className="team-details-title">
            <h1 className="title">First name: {user.firstName}</h1>
            <h2 className="title">Last name: {user.lastName}</h2>
            <h1 className="title">Nick: {user.displayName}</h1>
            <h2 className="title">Location: {user.location}</h2>
          </div>
        </Centralizer>
      )}
    </>
  );
}

export default Details;
