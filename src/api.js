let usersUrl = `https://cgjresszgg.execute-api.eu-west-1.amazonaws.com/users/`;
let teamsUrl = `https://cgjresszgg.execute-api.eu-west-1.amazonaws.com/teams/`;

const call = (url, id = "") => {
  return fetch(`${url}${id}`).then((response) => response.json());
};

const getTeams = (id) => {
  return call(teamsUrl, id);
};

const getUsers = (id) => {
  return call(usersUrl, id);
};

export { getTeams, getUsers };
