class Book {
    constructor(title, author, genre, year, numOfPages){
      this.title = title;
        this.author = author;
        this.genre = genre;
        this.year = year;
        this.numOfPages = numOfPages; 
    }

displayBookInfo() {
    console.log(`Title: ${this.title}\nAuthor: ${this.author}\nGenre: ${this.genre}\nYear: ${this.year}\nNo. of Pages: ${this.numOfPages}`);
}
}
export { Book };