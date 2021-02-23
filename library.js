import { Book } from './book.js';
let myLibrary = [];

//document.getElementById('submitBook').addEventListener('click', function() {
document.getElementById('submitBook').addEventListener('click', function(e) {
    addBookToLibrary();
    myLibrary.forEach(book => console.log(book));
})

function addBookToLibrary() {
    let title = document.getElementById("title").value;   
    let author = document.getElementById("author").value;
    let genre = document.getElementById("genre").value;
    let year = document.getElementById("year").value;
    let numOfPages = document.getElementById("numOfPages").value;
     
    let bookToAdd = new Book(title, author, genre, year, numOfPages);
  
    bookToAdd.displayBookInfo();
    myLibrary.push(bookToAdd);
}
 

