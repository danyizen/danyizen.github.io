/* function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
};
  
function getList(List){
    const index = getRandomIntInclusive(0, list.length - 1);
    return List[index];
};

async function getGenre() {
    const results = await fetch(
      "https://api.nytimes.com/svc/books/v3/lists/names.json?api-key=7UwAx6ld8Cu8YoQcUnaSUKrjhagUAPy7"
    );
    const GenreListName = await results.json(list_name);
    const newList = getList(GenreListName);
    console.table(newList);
}; */

async function getGenre() {
    let data = localStorage.getItem('NYTListNames');
    let GenreListName = JSON.parse(data);

    if(!Array.isArray(GenreListName)) {
        const results = await fetch(
            "https://api.nytimes.com/svc/books/v3/lists/names.json?api-key=7UwAx6ld8Cu8YoQcUnaSUKrjhagUAPy7"
            );
        GenreListName = await results.json();
    }

    console.table(GenreListName);
    let listItemJson;
    if (Array.isArray(GenreListName?.results)) {
        localStorage.setItem('NYTListNames', JSON.stringify(GenreListName.results))
        listItemJson = GenreListName.results;
    } else {
        listItemJson = ['bad list items'];
    }
    
    const listItem = localStorage.getItem('NYTListNames'); //getItem is for getting from the storage
    const listItemArray = JSON.parse(listItem);

    const youngAdultLists = listItemArray.filter((item,idx) => {
        const searchString = 'young adult';
        // list_name
        const listLower = item.list_name.toLowerCase();
        const searchLow = searchString.toLowerCase();
        return listLower.includes(searchLow);
    })
    // const newList = getList(GenreListName);
    console.log(youngAdultLists);

    function ChosenGenre() {
        startBtn.addEventListener('click', () => {
            encodedGenreName ='combined-print-fiction';
            console.log(apiAddress);
            
    }
 
};


document.addEventListener("DOMContentLoaded", async () => getGenre()); // the async keyword means we can make API requests
// async () => await getGenre();



// let chosenGenre = () => {
//     let encodedGenreName = '';
//     let apiAddress = 'https://api.nytimes.com/svc/books/v3/lists/current/${encodedGenreName}.json?api-key=7UwAx6ld8Cu8YoQcUnaSUKrjhagUAPy7';
//     console.log(this.value)
//     console.log(apiAddress)
//     const startBtn = document.querySelector('#start-button')
//     startBtn.addEventListener('click', () => {
//         encodedGenreName ='combined-print-fiction';
//         console.log(apiAddress);
// }    