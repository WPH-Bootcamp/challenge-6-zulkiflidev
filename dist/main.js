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
(0, bookManager_1.addBook)({ title: "Tenggelamnya Kapal Van der Wijck", author: "Hamka", publicationYear: 1938 });
(0, bookManager_1.addBook)({ title: "Azab dan Sengsara", author: "Merari Siregar", publicationYear: 1920 });
(0, bookManager_1.addBook)({ title: "Layar Terkembang", author: "Sutan Takdir Alisjahbana", publicationYear: 1936 });
(0, bookManager_1.addBook)({ title: "Manusia Baru", author: "Sanusi Pane", publicationYear: 1940 });
(0, bookManager_1.addBook)({ title: "Namaku Hiroko", author: "Nh. Dini", publicationYear: 1977 });
(0, bookManager_1.addBook)({ title: "Hujan dan Migrain", author: "Sapardi Djoko Damono", publicationYear: 2014 });
(0, bookManager_1.addBook)({ title: "Sitti Nurbaya: Kasih Tak Sampai dan Sengsara Membawa Nikmat", author: "Marah Rusli", publicationYear: 1920 });
(0, bookManager_1.addBook)({ title: "Lupus: Tangkaplah Daku Kau Kujitak", author: "Hilman Hariwijaya", publicationYear: 1986 });
(0, bookManager_1.addBook)({ title: "Ali Topan Anak Jalanan", author: "Teguh Esha", publicationYear: 1977 });
(0, bookManager_1.addBook)({ title: "Dilan: Dia adalah Dilanku Tahun 1990", author: "Pidi Baiq", publicationYear: 2014 });
(0, bookManager_1.addBook)({ title: "Selamat Tinggal", author: "Tere Liye", publicationYear: 2020 });
//===3. Tampilkan Buku
console.log();
console.log("===Uji fungsi listBooks===");
(0, bookManager_1.listBooks)();
//===4A. Cari Buku tanpa parameter
console.log();
console.log("===Uji fungsi searchBook tanpa parameter===");
(0, bookManager_1.searchBook)();
//===4B. Cari Buku dengan parameter
console.log();
console.log("===Uji fungsi searchBook dengan parameter===");
console.log();
console.log("=== (1) Cari buku yang tidak tersedia===");
(0, bookManager_1.searchBook)("sore");
console.log();
console.log("=== (2) Cari buku yang tersedia===");
(0, bookManager_1.searchBook)("dan");
