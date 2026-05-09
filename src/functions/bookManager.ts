// Tugas 3: Implementasikan fungsi-fungsi manajemen buku

import { books } from "../data/books"

// Fungsi addBook
// Fungsi ini digunakan untuk menambahkan buku baru ke dalam koleksi
// Parameter yang dibutuhkan: data buku sesuai tipe Book
// Fungsi ini tidak mengembalikan nilai (void)
// Petunjuk: pikirkan bagaimana cara menambahkan buku ke array yang sudah disediakan

export function addBook(book: TBook):void {
    books.push(book);
    console.log("Add Done...")
}


// Fungsi listBooks
// Fungsi ini digunakan untuk menampilkan semua buku yang tersimpan
// Tidak memerlukan parameter
// Fungsi ini tidak mengembalikan nilai (void)
// Petunjuk: pikirkan cara menampilkan data buku dengan format yang mudah dibaca


export function listBooks():void {
    books.forEach(
        (book,index) => {
            console.log(`${index+1}. Judul: ${book.title}, Penulis: ${book.author}, Publication Year: ${book.publicationYear}`)
        }
    );
}


// Fungsi searchBook
// Fungsi ini digunakan untuk mencari buku berdasarkan judul
// Parameter title bersifat opsional (bisa ada atau tidak)
// Fungsi ini tidak mengembalikan nilai (void)
// Petunjuk: jika parameter title diberikan, cari buku yang cocok
//           jika tidak diberikan, tampilkan semua buku atau berikan informasi yang sesuai

export function searchBook(title?: string,):void {
 
    if (title === undefined){
        listBooks();
        return;
    }
    console.log(books.find(book => book.title.toLowerCase() == title?.toLowerCase()));

}