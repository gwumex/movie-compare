const fetchData = async (searchTerm) => {
    const response = await axios.get('http://www.omdbapi.com/', {
        params: {
            apikey: '6d229a2c',
            s: searchTerm
        }
    });
    return response.data.Search;
};
 
const input = document.querySelector('input');

const onInput = async (e) => {
        if(e.target.value.match("[a-zA-Z]")){
          const movies = await fetchData(e.target.value);
          for(let movie of movies){
            const div = document.createElement("div");
            div.innerHTML = `
            <img src="${movie.Poster}" alt="" />
            <h1>${movie.Title}</h1>
            `;
            document.querySelector('#target').appendChild(div);
          }
    }
}
input.addEventListener("input", debounce(onInput, 500))