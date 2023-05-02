// This file is not in-use just my notes





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


//05/01
// const apiCall = async(proxyURL,apiURL) =>{
//     const results = await fetch(proxyURL + apiURL) .then(
//         (response) => {return response.json()}) 
//         .catch((error) => { console.error("Error fetching data:", error); });
//     return results;
// }
// const proxyURL = "http://localhost:8080/"; 



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




console.log('fired p5')
let sketch = function (p5js) {
    console.log('inside sketch')

    let img2;

    p5js.setup = function () {
        console.log('set up p5')
        p5js.createCanvas(200, 200, p5js.WEBGL);
        p5js.rectMode(p5js.CENTER);

        console.log(chosenBook.book_image)
        img2 = p5js.createImage(chosenBook.book_image);
        //img.crossOrigin = "";
        //p5js.loadImage(); caused CORS so used createImg to bypass.

    };

    p5js.draw = function () {
        p5js.background(250);

        let locX = p5js.mouseX - p5js.height / 2;
        let locY = p5js.mouseY - p5js.width / 2;

        p5js.ambientLight(250, 220, 150);
        p5js.pointLight(255, 255, 255, locX, locY, 100);

        p5js.push();
        p5js.rotateZ(p5js.frameCount * 0.01);
        p5js.rotateX(p5js.frameCount * 0.01);
        p5js.rotateY(p5js.frameCount * 0.01);
        p5js.texture(img2);
        p5js.box(330 / 2, 496 / 2, 10);
        p5js.pop(); //restore
    };

    p5js.setup()
    p5js.draw()
}

// booksData.forEach(element => {
//     console.log(element.rank, 
//             element.title, 
//             element.author, 
//             element.description, 
//             element.book_image)    
// });
if (window['p5']) {
    console.log('p5 exists')
    let myp5 = new p5(sketch, canvas2);
} else {
    console.log('p5 not loaded')
}
});