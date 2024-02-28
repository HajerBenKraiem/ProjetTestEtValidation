const Book = require('./Book');

describe('Book', () => {
    test('Add a book', () => {
        const book = new Book("Harry Potter", "J.K. Rowling", 1997);
        expect(book.title).toBe("Harry Potter");
        expect(book.author).toBe("J.K. Rowling");
        expect(book.year).toBe(1997);
    });

    test('Update the title', () => {
        const book = new Book("Harry Potter", "J.K. Rowling", 1997);
        book.updateTitle("New Title");
        expect(book.title).toBe("New Title");
    });

    test('Update the year', () => {
        const book = new Book("Harry Potter", "J.K. Rowling", 1997);
        book.updateYear(2000);
        expect(book.year).toBe(2000);
    });

    test('Remove a book', () => {
        const book = new Book("Harry Potter", "J.K. Rowling", 1997);
        book.remove();
        expect(book.title).toBeNull();
        expect(book.author).toBeNull();
        expect(book.year).toBeNull();
    });
});
