import React from "react";
import { render } from "react-dom";
import axios from "axios";
import TaskDescription from "./TaskDescription";

const SEARCH_ENDPOINT = "https://api.github.com/search/repositories?q=react";

const getReactRepositories = () =>
  axios
    .get(SEARCH_ENDPOINT)
    .then((result) => result.data.items)
    .then((repos) =>
      repos.map(({ forks, name, stargazers_count, html_url }) => ({
        forks,
        name,
        stars: stargazers_count,
        url: html_url
      }))
    );

getReactRepositories().then((res) => console.log(res));

const App = () => <TaskDescription />;

render(<App />, document.getElementById("root"));
