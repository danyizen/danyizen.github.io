// function result() {
//     const gachaBtn = document.querySelector('#result')
//     gachaBtn.addEventListener('click', () => {

async function goToList (){
    //on canvas
    let canvas = document.querySelector('canvas');
    
    // let data = localStorage.getItem('NYTListNames');
    // let goToList = JSON.parse(data); always the 58-item

    // .json(): the result of taking JSON as input and parsing it to produce a JavaScript object. 
    const results = await fetch("https://api.nytimes.com/svc/books/v3/lists/current/humor.json?api-key=7UwAx6ld8Cu8YoQcUnaSUKrjhagUAPy7");
    const data = await results.json()
    console.table(data);
    
    //stringfy data & parse
    

    //get 4 strings: 1) rank, 2) book name, 3) summary, 4) photo

    //form new Array[][]

    //randomize: choose one[] from the array

    //get the chosen one's information visualized on canvas, w/ the photo of of p5.js effect
}

//     })
// }
// document.addEventListener('DOMContentLoaded', () => result());
// how to add async function in sync?


document.addEventListener('DOMContentLoaded', async () => goToList());