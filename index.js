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
          const movies = await fetchData(e.target.value)
        console.log(movies);       
    }
}
input.addEventListener("input", debounce(onInput, 500))