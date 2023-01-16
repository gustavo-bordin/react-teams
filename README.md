# 1. Approaching the problem

### 1.1 I started looking at the teams and users data to see how i would organize and link them, I came up with the following assertions;

- Does not have pagination, so it requires full load;
- In a list of all teams, i cant show how many members each one have, unless i make 500reqs everytime requesting for the details of each one.
- I can see the members of a team, but i cant see the teams of a member; because team details has all users info, but user details does not have all teams info. In order to achive such feature i would have to make 500reqs to check if the user is in each team.

### 1.2 With the data structure in mind, i started to design the website flow, i came up with the following structure;

- --> Main page (List of teams) `needs to fetch teams`
- ------> Team details (With list of members) `needs to fetch users and team details`
- -----------> Member details `needs to fetch user details`

### 1.3 Now, i needed to think on the states and how i would organize them the best way, i came up with the following thoughts;

- As we don't have any query param or pagination in the api, we cant call the users api everytime we enter in the Team details
- It is better to fetch all the data a single time when the app starts
- As we don't have pagination in the teams, it is better to fetch everything a single time too.
- As this is a simple application, i decided to fetch all the data in a parent component and pass them to children via props, no advanced state management such as Context or Redux.

### 1.4 Then, i created these routes;

- `/` redirects to /teams
- `/teams` receives an array with all teams via props - Works as Main page
- `/teams/:id` receives an id via params and an array with all users via props - Works as Team details
  - Here an array of users is needed to filter and find the team members
- `/users/:id` receives an id via props - Works as User details

# 2. How to run

### 2.1. Have npm or yarn installed in your computer

- [Get NPM](https://nodejs.org/en/download/)
- [Get Yarn](https://yarnpkg.com/)

### 2.2. Install all react dependencies with your preferred pkg manager

With NPM, run

```
npm install
```

With Yarn, run

```
yarn install
```

### 2.3. Start the project

With NPM, run

```
npm start
```

With Yarn, run

```
yarn start
```

# 3. Project structure

Important files, each page uses one or more components; each page makes one or more calls in the api.js file; all pages are wrapped in router.js

```
src
  components/
     list/
     listItem/
     searchbar/
  pages/
    teams/
    users/
  router.js
  api.js
```
