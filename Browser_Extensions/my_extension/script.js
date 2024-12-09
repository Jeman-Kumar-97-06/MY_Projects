async function fetchScreenTime(tab){
    document.querySelector('#main_div').innerHTML = tab.url;
};

fetchScreenTime();