const loadBtn = document.querySelector('#gacha');
const genreSelected = document.querySelector('#genre');


loadBtn.addEventListener('click', async () => {
    
    const genreCodedName = genreSelected.value;
    
    // .json(): the result of taking JSON as input and parsing it to produce a JavaScript object. 
    //parse the data. JSON.stringify() is js->json. JSON.parse() is json->js.
    const results = await fetch("https://api.nytimes.com/svc/books/v3/lists/current/"+genreCodedName+".json?api-key=7UwAx6ld8Cu8YoQcUnaSUKrjhagUAPy7");
    const data = await results.json()
    
    // console.table(data);
    // console.log(data.results.books) 
    // data.results.books is array
    const booksData = data.results.books

    // pick a book
    const randomIndex = Math.floor(Math.random() * 10) // Returns a random integer from 1 to 10
    const chosenBook = booksData[randomIndex]
    console.log("chosenBook", chosenBook)
    
    //mapping
    document.querySelector("#bookcover-img").src = chosenBook.book_image
    document.querySelector("#rank").innerHTML = "Rank #" + chosenBook.rank
    document.querySelector("#bookname").innerHTML = chosenBook.title
    document.querySelector("#author").innerHTML = chosenBook.author
    document.querySelector("#description").innerHTML = chosenBook.description
   

    //reveal!!!
    document.querySelector("#reveal").style.display = 'block';
    
});



// booksData.forEach(element => {
    //     console.log(element.rank, 
    //             element.title, 
    //             element.author, 
    //             element.description, 
    //             element.book_image)    
    // });
    
// document.addEventListener('DOMContentLoaded', async () => goToList()); No need, bc now fetching API is triggered by clicking GACHA button.