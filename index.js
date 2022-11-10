const fetchData = async (searchTerm) => {
    const response = await axios.get('http://www.omdbapi.com/', {
        params: {
            apikey: '6d229a2c',
            s: searchTerm
        }
    });
    console.log(response.data);
};
let timeOut;
const input = document.querySelector('input');
const onInput = (e) => {
    if(timeOut){
        clearInterval(timeOut)
    }
    timeOut = setTimeout(() => {
        if(!e.target.value.match("[a-zA-Z]")){
            console.log("i didnt run");
            return;
        }
        fetchData(e.target.value)
    }, 1000)
}
input.addEventListener("input", onInput)