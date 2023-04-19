const loadBtn = document.querySelector('#gacha');
const genreSelected = document.querySelector('#genre');

loadBtn.addEventListener('click', async ()=> {

// async function goToList(){

    const genreCodedName = genreSelected.value;

    // .json(): the result of taking JSON as input and parsing it to produce a JavaScript object. 
    //parse the data. JSON.stringify() is js->json. JSON.parse() is json->js.
    const results = await fetch("https://api.nytimes.com/svc/books/v3/lists/current/"+genreCodedName+".json?api-key=7UwAx6ld8Cu8YoQcUnaSUKrjhagUAPy7");
    const data = await results.json()
    // console.table(data);
    // console.log(data.results.books)   data.results.books are arrays.
    const booksData = data.results.books
    
    //get rank, title, author, description, book_image     use Array.forEach
    booksData.forEach(element => {
        console.log(element.rank, 
                element.title, 
                element.author, 
                element.description, 
                element.book_image)    
    });
        
    //form new Array[][]

    //randomize: choose one[] from the array

    //get the chosen one's information visualized on canvas, w/ the photo of of p5.js effect
    //addEventListener click btn.
});

// document.addEventListener('DOMContentLoaded', async () => goToList()); No need, bc now fetching API is triggered by clicking GACHA button.