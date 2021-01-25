import { API_KEY, API_BASE_URL } from "./config.js";

class Fetch {
    constructor() {
        this.resultWrapper = document.querySelector(".resultWrapper");
    }

    getData = searchInput =>
        // prettier-ignore
        fetch(
        `${API_BASE_URL}/v1/volumes?q=${
            searchInput ? searchInput : 'search-term'
        }&maxResults=100&key=
    ${API_KEY}`
    )
        .then(response => response.json())
        .then(res => {
            let output = "";
            res.items.map(data => {
                const authors = data.volumeInfo.authors.length > 1 ? data.volumeInfo.authors.join(", ") : data.volumeInfo.authors;
                output += `
            <li>
            <img src="${data.volumeInfo.imageLinks.smallThumbnail}">
            <h4>${data.volumeInfo.title}</h4>
            <p>${
                authors.length > 50 ? `${authors.slice(0, 50)}...` : authors
            }<p>
            </li>
            `;
            });
            this.resultWrapper.innerHTML = output;
        });
}

export default Fetch;
