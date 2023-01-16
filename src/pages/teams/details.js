import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { MdPeople } from "react-icons/md";
import { RiVipCrownLine } from "react-icons/ri";

import NavBar from "../../components/navbar";
import Centralizer from "../../components/centralizer";
import { getTeams } from "../../api";
import List from "../../components/list";
import Loading from "../../components/loading";
import SearchBar from "../../components/searchbar";

function Details(props) {
  const { teamId } = useParams();
  const [team, setTeam] = useState({});
  const [teamLeader, setTeamLeader] = useState({});
  const [teamMembers, setTeamMembers] = useState([]);
  const [foundMembers, setFoundMembers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [filter, setFilter] = useState("");

  function onFilterChange(e) {
    setFilter(e.target.value);
  }

  useEffect(() => {
    getTeams(teamId).then((team) => {
      setTeam(team);
      setIsLoading(false);
    });
  }, [teamId]);

  useEffect(() => {
    const leader = props.users.find((user) => user.id === team.teamLeadId);
    setTeamLeader(leader);
    const members = props.users.filter(
      (user) => team.teamMemberIds?.indexOf(user.id) !== -1
    );

    setTeamMembers(members);
  }, [team, props.users]);

  useEffect(() => {
    const iFilter = filter.toLowerCase();
    const foundMembers = teamMembers.filter((user) =>
      user.displayName.toLowerCase().includes(iFilter)
    );
    setFoundMembers(foundMembers);
  }, [filter, teamMembers]);

  return (
    <>
      <NavBar />
      {isLoading ? (
        <Loading />
      ) : (
        <Centralizer>
          <div className="team-details-title">
            <h1 className="title">{team.name}</h1>
            <p className="subtitle">{team.id}</p>
          </div>
          <div className="team-details-labels">
            <MdPeople />
            <p>Total members: {team.teamMemberIds.length} </p>
            <RiVipCrownLine />
            <p>
              Leader:{" "}
              <Link to={`/users/${teamLeader?.id}`}>
                {teamLeader?.displayName}
              </Link>
            </p>
          </div>

          <SearchBar
            title="Members"
            placeholder="Filter by member name"
            callback={onFilterChange}
            filter={filter}
          />
          <List items={filter ? foundMembers : teamMembers} root="users" />
        </Centralizer>
      )}
    </>
  );
}

export default Details;
