// File ini adalah entry point aplikasi
// Gunakan file ini untuk menguji implementasi yang sudah dibuat
// Contoh yang bisa dilakukan:
//   1. Import fungsi-fungsi yang sudah dibuat
//   2. Tambahkan beberapa data buku untuk testing
//   3. Uji fungsi listBooks untuk melihat semua data
//   4. Uji fungsi searchBook dengan dan tanpa parameter
// Silakan bereksplorasi untuk memastikan semua fungsi berjalan dengan baik

console.log("Book Management Application - Week 6");
console.log("=====================================");

// Mulai pengujian di bawah ini

//===1. Import Fungsi
import { addBook, listBooks, searchBook } from "./functions/bookManager"

//===2. Tambah Buku
console.log();
console.log("===Uji tambah buku===");
addBook({ title: "Layar Terkembang", author: "Budi S", publicationYear: 1955 });
addBook({ title: "Hujan", author: "Ahmad", publicationYear: 2012 });
addBook({ title: "Suatu Pagi", author: "Hariman", publicationYear: 1990 });

//===3. Tampilkan Buku
console.log();
console.log("===Uji fungsi listBooks===");
listBooks();

//===4A. Cari Buku tanpa parameter
console.log();
console.log("===Uji fungsi searchBook dengan parameter===");
searchBook()

//===4B. Cari Buku dengan parameter
console.log();
console.log("===Cari buku yang tidak ada===");
searchBook("Sore");

console.log();
console.log("===Cari buku yang ada===");
searchBook("Pagi");


