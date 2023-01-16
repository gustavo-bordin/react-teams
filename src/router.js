import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { getTeams, getUsers } from "./api";

import Teams from "./pages/teams";
import TeamDetails from "./pages/teams/details";
import UserDetails from "./pages/users/details";

function Router() {
  const [users, setUsers] = useState([]);
  const [teams, setTeams] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getTeams().then((teams) => setTeams(teams));
    getUsers().then((users) => {
      setUsers(users);
      setIsLoading(false);
    });
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/teams" />} />
        <Route
          path="/teams"
          element={<Teams teams={teams} isLoading={isLoading} />}
        />
        <Route path="/teams/:teamId" element={<TeamDetails users={users} />} />
        <Route path="/users/:userId" element={<UserDetails />} />
        <Route path="*" element={<h1>Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
