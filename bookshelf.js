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

function choosePix1() { //INSERT YOUR OWN IMAGES INTO THIS ARRAY FOR THE FULL EFFECT
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

function choosePix2() {  //INSERT YOUR OWN IMAGES INTO THIS ARRAY FOR THE FULL EFFECT
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

function choosePix3() {  //INSERT YOUR OWN IMAGES INTO THIS ARRAY FOR THE FULL EFFECT
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

function choosePix4() {  //INSERT YOUR OWN IMAGES INTO THIS ARRAY FOR THE FULL EFFECT
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

function choosePix5() {  //INSERT YOUR OWN IMAGES INTO THIS ARRAY FOR THE FULL EFFECT
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


//OTHER DRAGSTART EVENTS ARE HERE

function startBorrow(event) {
    event.dataTransfer.setData('text', event.target.id);
}

function basketStart(event) {
    event.dataTransfer.setData('text', event.target.id);
}

// DRAGOVER EVENTS

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

// THIS CONTROLS THE DIALOG BOX

const conFirm = document.querySelector("#confirm");
const printBook = document.querySelector("#printBook");
const basket1 = document.querySelector("#basket1");
const basket2 = document.querySelector("#basket2");
const closeBtn = document.querySelector("#closeBtn");

conFirm.addEventListener("click", function onOpen() {
    closeBtn.addEventListener('click', function onClick() {
        printBook.close();
    });
    if (typeof printBook.showModal === 'function') {
        printBook.showModal();
        let printParent = document.createElement('div');
        let orderNumber = document.createElement('p');
        let firstPrint = document.createElement('div');
        let secondPrint = document.createElement('div');
        let thanks = document.createElement("p");
        let firstWrap = document.createElement('div');
        let secondWrap = document.createElement('div');
        let myDetails = document.createElement('div');
        let myh5 = document.createElement('h5');
        let myPara = document.createElement('p');
        let myDetails2 = document.createElement('div');
        let myh52 = document.createElement('h5');
        let myPara2 = document.createElement('p');

        //All random methods - for order number, book title and book number

        let randomOrder = Math.floor(Math.random() * 100000);
        let bookTitles = new Array('This Book', 'That Book', 'My Book', 'Our Book', 'Their Book', 'Hard Book', 'Old Book', 'Another Book', 'New Book');
        let bookTitles2 = new Array('Pretty Book', 'Modern Book', 'Work Book', 'Good Book', 'Simple Book', 'Super Book', 'Ancient Book', 'Ethan Book', 'Clear Book');
        let randomTitle = Math.floor(Math.random() * bookTitles.length);
        let randomTitle2 = Math.floor(Math.random() * bookTitles2.length);

        let bookNumber = Math.floor(Math.random() * 100);
        let bookNumber2 = Math.floor(Math.random() * 100);

        //random order number ends here

        //logic for date of return

        let dueDate = new Date();
        let getmyDay = dueDate.getDate();
        let getmyMonth = dueDate.getMonth();
        let regularMonth = parseInt(getmyMonth) + 1;
        let getmyYear = dueDate.getFullYear();


        //logic for date of return ends here


        //The rest of the DOM logic lies here

        //assign IDs to the elements created
        orderNumber.id = 'orderNumber';
        firstWrap.id = 'firstWrap';
        secondWrap.id = 'secondWrap';
        myDetails.id = 'myDetails';
        myh5.id = 'myh5';
        myPara.id = 'myPara';
        myDetails2.id = 'myDetails2';
        myh52.id = 'myh52';
        myPara2.id = 'myPara2';
        printParent.id = 'printParent';
        firstPrint.id = 'firstPrint';
        secondPrint.id = 'secondPrint';
        thanks.id = 'printParagraph';


        //this returns random values assigned to the DOM elements created
        orderNumber.innerText = `ORDER NUMBER: ${randomOrder}`;
        thanks.innerText = `THANK YOU FOR USING OUR LIBRARY. PLEASE RETURN ON: ${getmyDay}-${regularMonth}-${getmyYear}.`;
        myh5.innerText = `Title: ${bookTitles[randomTitle]}`;
        myPara.innerText = `Book #${bookNumber}`;
        myh52.innerText = `Title: ${bookTitles2[randomTitle2]}`;
        myPara2.innerText = `Book #${bookNumber2}`;

        //this maintains the div sizes of the transferred dropped elements in basketDrop();
        basket1.style.height = '180px';
        basket2.style.height = '180px';
        basket1.style.width = '240px';
        basket2.style.width = '240px';

        //Node appendages
        firstPrint.appendChild(basket1);
        secondPrint.appendChild(basket2);

        printParent.appendChild(orderNumber);

        myDetails.appendChild(myh5);
        myDetails.appendChild(myPara);

        myDetails2.appendChild(myh52);
        myDetails2.appendChild(myPara2);

        firstWrap.appendChild(firstPrint);
        firstWrap.appendChild(myDetails);

        secondWrap.appendChild(secondPrint);
        secondWrap.appendChild(myDetails2);

        printParent.appendChild(firstWrap);
        printParent.appendChild(secondWrap);
        printParent.appendChild(thanks);
        printBook.appendChild(printParent);
        startBorrow();
    } else {
        alert("Your browser doesn't support dialogs");
    }
});
