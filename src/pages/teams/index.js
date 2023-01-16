import { useState, useEffect } from "react";

import Centralizer from "../../components/centralizer";
import NavBar from "../../components/navbar";
import List from "../../components/list";
import SearchBar from "../../components/searchbar";
import Loading from "../../components/loading";

import "./styles.css";

function Teams(props) {
  const [filter, setFilter] = useState("");
  const [foundTeams, setFoundTeams] = useState([]);

  function onFilterChange(e) {
    setFilter(e.target.value);
  }

  useEffect(() => {
    const iFilter = filter.toLowerCase();
    const foundTeams = props.teams.filter((team) =>
      team.name.toLowerCase().includes(iFilter)
    );
    setFoundTeams(foundTeams);
  }, [filter]);

  return (
    <>
      <NavBar />
      {props.isLoading ? (
        <Loading />
      ) : (
        <Centralizer>
          <SearchBar
            title="Showing all teams"
            placeholder="Filter by team name"
            callback={onFilterChange}
            filter={filter}
          />
          <List items={filter ? foundTeams : props.teams} root="teams" />
        </Centralizer>
      )}
    </>
  );
}

export default Teams;
