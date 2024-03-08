/**
 * Book: title, author, isCheckout, dueDate, returnBook, borrowBook
 * Library: book management: how many book left, which one was removed
 * 
 */

class Book {
    constructor(title, author){
        this.title = title;
        this.author = author;
        this.isCheckout = false;
    }

    borrowBook(){
        if(!this.isCheckout){
            console.log('Checking out the book ...');
            this.isCheckout = true;
        }
        else{
            console.log('Not available!');
        }
    }

    returnBook(){
       this.isCheckout = false;
    }
}

class Library{
    constructor(){
        this.books = []
    }

    addBook(book){
        this.books.push(book);
        console.log('Curent books: ', this.books);
    }

    removeBook(body){
        const bookIndex = this.books.indexOf(book);
        const isBookExisting = bookIndex !== -1
        if(isBookExisting){
            this.books.splice(bookIndex, 1);
        }
        else{
            console.log('This book is not in the library to remove!');
        }
    }

    searchByTittle(book){

    }

    searchByAuthor(book){

    }
}

const library = new Library();
const book1 = new Book('How to learn JS', 'Teo')
const book2 = new Book('How to learn JS trong 24hs', 'Teo')
library.addBook(book1);
library.addBook(book2);

book1.borrowBook();
book1.borrowBook();
book1.returnBook();
book1.borrowBook();