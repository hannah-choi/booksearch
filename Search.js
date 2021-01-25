import Fetch from "./Fetch.js";

const fetchClass = new Fetch();

class Search {
    constructor() {
        this.form = document.getElementById("searchbook");
    }

    onSubmit(e, searchInput) {
        console.log(searchInput);
        e.preventDefault();
        fetchClass.getData(searchInput);
        this.form.reset();
    }
}

export default Search;
