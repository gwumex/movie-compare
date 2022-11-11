const fetchData = async (searchTerm) => {
    const response = await axios.get('http://www.omdbapi.com/', {
        params: {
            apikey: '6d229a2c',
            s: searchTerm
        }
    });
    if(response.data.Error){
        return [];
    }
    return response.data.Search;
};

const root = document.querySelector('.autocomplete');
    root.innerHTML = `
    <label><b>Search For a Movie</b></label>
    <input class = "input"></input>
    <div class = "dropdown">
    
    <div class="dropdown-menu">
    <div class="dropdown-content results">
    </div>

    </div>
    </div>
    `;

 
const input = document.querySelector('input');
const dropdown = document.querySelector('.dropdown');
const resultsWrapper = document.querySelector('.results');
const onInput = async (e) => {
        if(e.target.value.match("[a-zA-Z]")){
          const movies = await fetchData(e.target.value);

          if(!movies.length){
            dropdown.classList.remove("is-active");
            return;
          }
          resultsWrapper.innerHTML = "";
          dropdown.classList.add('is-active');

          for(let movie of movies){
            const option = document.createElement('a');
            const imgSrc = movie.Poster === "N/A" ? "" : movie.Poster;

            option.classList.add("dropdown-item")
            option.innerHTML = `
            <img src="${movie.Poster}" alt="" />
           ${movie.Title}
            `;

            option.addEventListener('click', () => {
                dropdown.classList.remove("is-active");
            })
            resultsWrapper.appendChild(option);
          }
    }
}
input.addEventListener("input", debounce(onInput, 1000))

document.addEventListener('click', event => {
    if(!root.contains(event.target)){
        dropdown.classList.remove("is-active");
        input.value = movie.Title;
    }
})