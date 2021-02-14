import { Book, displayBookInfo } from 'file:///C:/Users/Alex/Desktop/JSpractice/Library/book.js';
console.log('hello');
let myLibrary = [];
//const book = require('book.js');

addBookToLibrary();

function addBookToLibrary() {
    let bookToAdd = new Book();

    bookToAdd.title = document.getElementById("title").textContent;
    bookToAdd.author = document.getElementById("author").textContent;
    bookToAdd.year = document.getElementById("year").textContent;
    bookToAdd.genre = document.getElementById("genre").textContent;
    bookToAdd.numOfPages = document.getElementById("numOfPages").textContent;
}
console.log(displayBookInfo(bookToAdd));