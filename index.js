const fetchData = async (searchTerm) => {
    const response = await axios.get('http://www.omdbapi.com/', {
        params: {
            apikey: '6d229a2c',
            s: searchTerm
        }
    });
    
    console.log(response.data);
    console.log("object");
};

const input = document.querySelector('input');

input.addEventListener("input", (e) =>{
    fetchData(e.target.value)
})