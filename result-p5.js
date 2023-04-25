const loadBtn = document.querySelector('#gacha');
const genreSelected = document.querySelector('#genre');

loadBtn.addEventListener('click', async ()=> {

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
    const randomIndex = Math.floor(Math.random()* 10) // Returns a random integer from 1 to 10
    const chosenBook = booksData[randomIndex]
    console.log(chosenBook)
    
    //mapping
    document.getElementById("rank").innerHTML = "Rank #" + chosenBook.rank
    document.getElementById("bookname").innerHTML = chosenBook.title
    document.getElementById("author").innerHTML = chosenBook.author
    document.getElementById("description").innerHTML = chosenBook.description

    //p5.js
    let sketch = function(p5js) {
        
        const canvas2 = document.getElementById("bookcover-canvas")
        let img2;

        p5js.setup = function() {
            p5js.createCanvas(200, 200);
            p5js.rectMode(p5js.CENTER);
            img2 = loadImage(chosenBook.book_image);
        };
        
        p5js.draw = function() {  
            background(250);

            let locX = mouseX - height / 2;
            let locY = mouseY - width / 2;

            ambientLight(250, 220, 150);
            pointLight(255, 255, 255, locX, locY, 100);

            push();
            rotateZ(frameCount * 0.01);
            rotateX(frameCount * 0.01);
            rotateY(frameCount * 0.01);
            texture(img);
            box(330/2,496/2,10);
            pop();
        };

        let myp5 = new p5(sketch);

    }



    //reveal!!!
    document.getElementById("reveal").style.display = 'block';

    
    
    // booksData.forEach(element => {
    //     console.log(element.rank, 
    //             element.title, 
    //             element.author, 
    //             element.description, 
    //             element.book_image)    
    // });
});

// document.addEventListener('DOMContentLoaded', async () => goToList()); No need, bc now fetching API is triggered by clicking GACHA button.