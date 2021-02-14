class Book {
    constructor() {
        title,
            author,
            genre,
            year,
            numOfPages
    }
    /*constructor(title, author, genre, year, numOfPages){
      this.title = title;
        this.author = author;
        this.genre = genre;
        this.year = year;
        this.numOfPages = numOfPages; 
    }*/


}
function displayBookInfo(book) {
    console.log(`Title: ${book.title}\nAuthor: ${book.author}\n Genre: ${book.genre}\n Year: ${book.year}\n No. of Pages: ${book.numOfPages}`);
}
export { Book, displayBookInfo };