const result = document.querySelector(".result");

import Search from "./Search.js";
import Fetch from "./Fetch.js";

const search = new Search();
const fetchClass = new Fetch();

document.addEventListener("submit", e => {
    search.onSubmit(e, e.target.searchInput.value);
});

document.addEventListener("DOMContentLoaded", fetchClass.getData());
