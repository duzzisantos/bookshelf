//THE LOCATIONS OF THE IMAGES

// DRAG START FOR FIRST STAGE

function myStart(event) {
    //The dragstart event trigger
    event.dataTransfer.setData('text', event.target.id);

    //callback functions for the new divs that will replace the dragged divs
    choosePix1();
    choosePix2();
    choosePix3();
    choosePix4();
    choosePix5();
}


//THIS REPLACES DRAGGED DIVS WITH NEW DIVS/IMAGES

const ourBooks1 = document.getElementById("ourBooks1");
const ourBooks2 = document.getElementById("ourBooks2");
const ourBooks3 = document.getElementById("ourBooks3");
const ourBooks4 = document.getElementById("ourBooks4");
const ourBooks5 = document.getElementById("ourBooks5");

function choosePix1() {
    const newImages = new Array('bookshelf/book1.jpg', 'bookshelf/book2.jpg', 'bookshelf/book3.jpg', 'bookshelf/book4.jpg', 'bookshelf/book5.jpg', 'bookshelf/book6.jpg', 'bookshelf/book7.jpg', 'bookshelf/book8.jpg',
        'bookshelf/book9.jpg', 'bookshelf/book10.jpg', 'bookshelf/book11.jpg', 'bookshelf/book12.jpg', 'bookshelf/book13.jpg', 'bookshelf/book14.jpg', 'bookshelf/book15.jpg', 'bookshelf/book16.jpg');

    const randImage = Math.floor(Math.random() * newImages.length);
    const mybookImage = document.createElement('div');
    const image = document.createElement('img');
    image.src = newImages[randImage];
    mybookImage.id = 'mybookImage';
    mybookImage.draggable = true;
    image.draggable = true;
    mybookImage.setAttribute('ondragstart', 'myStart(event)');
    image.setAttribute('ondragstart', 'myStart(event)');
    mybookImage.appendChild(image);
    ourBooks1.appendChild(mybookImage);
    console.log(randImage);
    myStart;
}

function choosePix2() {
    const newImages = new Array('bookshelf/book1.jpg', 'bookshelf/book2.jpg', 'bookshelf/book3.jpg', 'bookshelf/book4.jpg', 'bookshelf/book5.jpg', 'bookshelf/book6.jpg', 'bookshelf/book7.jpg', 'bookshelf/book8.jpg',
        'bookshelf/book9.jpg', 'bookshelf/book10.jpg', 'bookshelf/book11.jpg', 'bookshelf/book12.jpg', 'bookshelf/book13.jpg', 'bookshelf/book14.jpg', 'bookshelf/book15.jpg', 'bookshelf/book16.jpg');

    const randImage = Math.floor(Math.random() * newImages.length);
    const mybookImage = document.createElement('div');
    const image = document.createElement('img');
    image.src = newImages[randImage];
    mybookImage.id = 'mybookImage';
    mybookImage.draggable = true;
    image.draggable = true;
    mybookImage.setAttribute('ondragstart', 'myStart(event)');
    image.setAttribute('ondragstart', 'myStart(event)');
    mybookImage.appendChild(image);
    ourBooks2.appendChild(mybookImage);
    myStart;

}

function choosePix3() {
    const newImages = new Array('bookshelf/book1.jpg', 'bookshelf/book2.jpg', 'bookshelf/book3.jpg', 'bookshelf/book4.jpg', 'bookshelf/book5.jpg', 'bookshelf/book6.jpg', 'bookshelf/book7.jpg', 'bookshelf/book8.jpg',
        'bookshelf/book9.jpg', 'bookshelf/book10.jpg', 'bookshelf/book11.jpg', 'bookshelf/book12.jpg', 'bookshelf/book13.jpg', 'bookshelf/book14.jpg', 'bookshelf/book15.jpg', 'bookshelf/book16.jpg');

    const randImage = Math.floor(Math.random() * newImages.length);
    const mybookImage = document.createElement('div');
    const image = document.createElement('img');
    image.src = newImages[randImage];
    mybookImage.id = 'mybookImage';
    mybookImage.draggable = true;
    image.draggable = true;
    mybookImage.setAttribute('ondragstart', 'myStart(event)');
    image.setAttribute('ondragstart', 'myStart(event)');
    mybookImage.appendChild(image);
    ourBooks3.appendChild(mybookImage);
    console.log(randImage);
    myStart;
}

function choosePix4() {
    const newImages = new Array('bookshelf/book1.jpg', 'bookshelf/book2.jpg', 'bookshelf/book3.jpg', 'bookshelf/book4.jpg', 'bookshelf/book5.jpg', 'bookshelf/book6.jpg', 'bookshelf/book7.jpg', 'bookshelf/book8.jpg',
        'bookshelf/book9.jpg', 'bookshelf/book10.jpg', 'bookshelf/book11.jpg', 'bookshelf/book12.jpg', 'bookshelf/book13.jpg', 'bookshelf/book14.jpg', 'bookshelf/book15.jpg', 'bookshelf/book16.jpg');

    const randImage = Math.floor(Math.random() * newImages.length);
    const mybookImage = document.createElement('div');
    const image = document.createElement('img');
    image.src = newImages[randImage];
    mybookImage.id = 'mybookImage';
    mybookImage.draggable = true;
    image.draggable = true;
    mybookImage.setAttribute('ondragstart', 'myStart(event)');
    image.setAttribute('ondragstart', 'myStart(event)');
    mybookImage.appendChild(image);
    ourBooks4.appendChild(mybookImage);
    console.log(randImage);
    myStart;
}

function choosePix5() {
    const newImages = new Array('bookshelf/book1.jpg', 'bookshelf/book2.jpg', 'bookshelf/book3.jpg', 'bookshelf/book4.jpg', 'bookshelf/book5.jpg', 'bookshelf/book6.jpg', 'bookshelf/book7.jpg', 'bookshelf/book8.jpg',
        'bookshelf/book9.jpg', 'bookshelf/book10.jpg', 'bookshelf/book11.jpg', 'bookshelf/book12.jpg', 'bookshelf/book13.jpg', 'bookshelf/book14.jpg', 'bookshelf/book15.jpg', 'bookshelf/book16.jpg');

    const randImage = Math.floor(Math.random() * newImages.length);
    const mybookImage = document.createElement('div');
    const image = document.createElement('img');
    image.src = newImages[randImage];
    mybookImage.id = 'mybookImage';
    mybookImage.draggable = true;
    mybookImage.setAttribute('ondragstart', 'myStart(event)');
    image.setAttribute('ondragstart', 'myStart(event)');
    image.draggable = true;
    mybookImage.appendChild(image);
    ourBooks5.appendChild(mybookImage);
    console.log(randImage);
    myStart;
}

//THE DIV REPLACEMENT LOGIC ENDS HERE


//OTHER DRAG EVENTS BEGIN HERE

function startBorrow(event) {
    event.dataTransfer.setData('text', event.target.id);
}

function basketStart(event) {
    event.dataTransfer.setData('text', event.target.id);
}

// DRAG OVER EVENTS

function myOver(event) {
    event.preventDefault();
}

function overBorrow(event) {
    event.preventDefault();
}

function basketOver(event) {
    event.preventDefault();
}


//DROP EVENTS

function myDrop(event) {
    event.preventDefault();
    var data = event.dataTransfer.getData('text');
    event.target.appendChild(document.getElementById(data));
    
}

function dropBorrow(event) {
    event.preventDefault();
    var data = event.dataTransfer.getData('text');
    event.target.appendChild(document.getElementById(data));

}

function basketDrop(event) {
    event.preventDefault();
    var data = event.dataTransfer.getData('text');
    event.target.appendChild(document.getElementById(data));
}
