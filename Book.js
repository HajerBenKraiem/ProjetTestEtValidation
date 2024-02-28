class Book {
    constructor(title, author, year) {
        this.title = title;
        this.author = author;
        this.year = year;
    }

    updateTitle(newTitle) {
        this.title = newTitle;
    }

    updateYear(newYear) {
        this.year = newYear;
    }

    remove() {
        this.title = null;
        this.author = null;
        this.year = null;
    }
}

module.exports = Book;
