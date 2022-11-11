const debounce = (func, delay = 1000 ) => {
    let timeOut;
    return(...arg) => {
        if(timeOut){
            clearInterval(timeOut);
        }
        timeOut = setTimeout(() => {
            func.apply(null, arg)
        }, delay)
    }
}

