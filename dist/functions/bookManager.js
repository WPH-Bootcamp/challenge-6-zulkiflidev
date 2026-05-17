"use strict";
// Tugas 3: Implementasikan fungsi-fungsi manajemen buku
Object.defineProperty(exports, "__esModule", { value: true });
exports.addBook = addBook;
exports.listBooks = listBooks;
exports.searchBook = searchBook;
const books_1 = require("../data/books");
//untuk pewarnaan text
const RED = "\x1b[31m";
const GREEN = "\x1b[32m";
const YELLOW = "\x1b[93m";
const BLUE = "\x1b[34m";
const RESET = "\x1b[0m";
// Fungsi addBook
// Fungsi ini digunakan untuk menambahkan buku baru ke dalam koleksi
// Parameter yang dibutuhkan: data buku sesuai tipe Book
// Fungsi ini tidak mengembalikan nilai (void)
// Petunjuk: pikirkan bagaimana cara menambahkan buku ke array yang sudah disediakan
function addBook(book) {
    books_1.books.push(book);
    console.log(`Tambah buku dengan judul ${YELLOW} ${book.title} ${RESET} --> ${BLUE}Selesai${RESET}`);
}
// Fungsi listBooks
// Fungsi ini digunakan untuk menampilkan semua buku yang tersimpan
// Tidak memerlukan parameter
// Fungsi ini tidak mengembalikan nilai (void)
// Petunjuk: pikirkan cara menampilkan data buku dengan format yang mudah dibaca
function listBooks() {
    books_1.books.forEach((book, index) => {
        console.log(`${index + 1}. ${YELLOW} ${book.title} ${RESET}, ${book.author}, ${book.publicationYear}`);
    });
}
// Fungsi searchBook
// Fungsi ini digunakan untuk mencari buku berdasarkan judul
// Parameter title bersifat opsional (bisa ada atau tidak)
// Fungsi ini tidak mengembalikan nilai (void)
// Petunjuk: jika parameter title diberikan, cari buku yang cocok
//           jika tidak diberikan, tampilkan semua buku atau berikan informasi yang sesuai
function searchBook(keyword) {
    if (keyword === undefined) {
        listBooks();
        return;
    }
    else {
        console.log(`Memulai pencarian untuk kata kunci ${BLUE}"${keyword}" ${RESET}`);
        console.log();
        const foundBooks = books_1.books.filter(book => book.title.toLocaleLowerCase().includes(keyword.toLowerCase()));
        if (foundBooks.length > 0) {
            console.log("Hasil Pencarian:");
            foundBooks.forEach((book, index) => { console.log(`${index + 1}. ${YELLOW} ${book.title} ${RESET}, ${book.author}, ${book.publicationYear}`); });
        }
        else {
            console.log("Hasil Pencarian:");
            console.log(`${RED}Maaf! Buku yang anda cari tidak ditemukan! ${RESET}`);
        }
    }
    console.log();
}
