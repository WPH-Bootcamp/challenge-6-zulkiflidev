"use strict";
// File ini adalah entry point aplikasi
// Gunakan file ini untuk menguji implementasi yang sudah dibuat
// Contoh yang bisa dilakukan:
//   1. Import fungsi-fungsi yang sudah dibuat
//   2. Tambahkan beberapa data buku untuk testing
//   3. Uji fungsi listBooks untuk melihat semua data
//   4. Uji fungsi searchBook dengan dan tanpa parameter
// Silakan bereksplorasi untuk memastikan semua fungsi berjalan dengan baik
Object.defineProperty(exports, "__esModule", { value: true });
console.log("Book Management Application - Week 6");
console.log("=====================================");
// Mulai pengujian di bawah ini
//===1. Import Fungsi
const bookManager_1 = require("./functions/bookManager");
//===2. Tambah Buku
console.log();
console.log("===Uji tambah buku===");
(0, bookManager_1.addBook)({ title: "Layar Terkembang", author: "Budi S", publicationYear: 1955 });
(0, bookManager_1.addBook)({ title: "Hujan", author: "Tere Liye", publicationYear: 2012 });
(0, bookManager_1.addBook)({ title: "Pagi", author: "Hariman", publicationYear: 1990 });
//===3. Tampilkan Buku
console.log();
console.log("===Uji fungsi listBooks===");
(0, bookManager_1.listBooks)();
//===4A. Cari Buku tanpa parameter
console.log();
console.log("===Uji fungsi searchBook dengan parameter===");
(0, bookManager_1.searchBook)();
//===4B. Cari Buku dengan parameter
console.log();
console.log("===Cari buku yang tidak ada===");
(0, bookManager_1.searchBook)("Sore");
console.log();
console.log("===Cari buku yang ada===");
(0, bookManager_1.searchBook)("Pagi");
