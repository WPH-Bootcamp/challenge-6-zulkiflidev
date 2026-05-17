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

//=========================== PENGUJIAN SECARA MANUAL ===

//===1. Import Fungsi
import { addBook, listBooks, searchBook } from "./functions/bookManager"
import * as readline from 'readline';

//===2. Tambah Buku
console.log();
console.log("==== MODE PENGUJIAN ===");
console.log("--- (1) Uji tambah buku");
addBook({ title: "Tenggelamnya Kapal Van der Wijck", author: "Hamka", publicationYear: 1938 });
addBook({ title: "Azab dan Sengsara", author: "Merari Siregar", publicationYear: 1920 });
addBook({ title: "Layar Terkembang", author: "Sutan Takdir Alisjahbana", publicationYear: 1936 });
addBook({ title: "Manusia Baru", author: "Sanusi Pane", publicationYear: 1940 });
addBook({ title: "Namaku Hiroko", author: "Nh. Dini", publicationYear: 1977 });
addBook({ title: "Dua Garis Biru dan Cerita Lain tentang Kita", author: "Lucia Priandarini", publicationYear: 2019 });
addBook({ title: "Sitti Nurbaya: Kasih Tak Sampai dan Sengsara Membawa Nikmat", author: "Marah Rusli", publicationYear: 1920 });
addBook({ title: "Lupus: Tangkaplah Daku Kau Kujitak", author: "Hilman Hariwijaya", publicationYear: 1986 });
addBook({ title: "Ali Topan Anak Jalanan", author: "Teguh Esha", publicationYear: 1977 });
addBook({ title: "Dilan: Dia adalah Dilanku Tahun 1990", author: "Pidi Baiq", publicationYear: 2014 });
addBook({ title: "Selamat Tinggal", author: "Tere Liye", publicationYear: 2020 });


//===3. Tampilkan Buku
console.log();
console.log("--- (2) Uji fungsi listBooks");
listBooks();

//===4A. Cari Buku tanpa parameter
console.log();
console.log("--- (3) Uji fungsi searchBook tanpa parameter");
searchBook()

//===4B. Cari Buku dengan parameter
console.log();
console.log("--- (4) Uji funggsi searchBook dengan parameter");
console.log();
console.log("--- (4a) Uji untuk Cari buku yang tidak tersedia");
searchBook("sore");

console.log();
console.log("--- (4b) Uji untuk Cari buku yang tersedia");
searchBook("dan");







//=========================== PENGUJIAN SECARA INTERAKTIF ===
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function showMenu() {
    console.log("\n==============================");
    console.log("    Simple Book Management");
    console.log("    by Zulkifli");  
    console.log("==============================");
    console.log("1. List All Books");
    console.log("2. Add New Book");
    console.log("3. Search Book");
    console.log("4. Exit");
    console.log("==============================");
    
    rl.question("Pilih menu (1-4): ", (choice:string) => {
        switch (choice) {
            case '1':
                console.log("\n--- Daftar Semua Buku ---");
                listBooks();
                showMenu();
                break;

            case '2':
                rl.question("Masukkan judul buku: ", (title: string) => {
                    if (!title.trim()) {
                        console.log("\n[Error] Judul buku tidak boleh kosong!");
                        showMenu();
                        return;
                    }
                    rl.question("Masukkan penulis: ", (author: string) => {
                        if (!author.trim()) {
                            console.log("\n[Error] Penulis tidak boleh kosong!");
                            showMenu();
                            return;
                        }
                        rl.question("Masukkan tahun terbit: ", (year: string) => {
                            const yearNum = parseInt(year);
                            if (!year.trim() || isNaN(yearNum)) {
                                console.log("\n[Error] Tahun terbit tidak boleh kosong dan harus berupa angka!");
                                showMenu();
                                return;
                            }
                            
                            addBook({
                                title: title.trim(),
                                author: author.trim(),
                                publicationYear: yearNum
                            });
                            showMenu();


                        });
                    });
                });
                break;

            case '3':
                rl.question("Masukkan kata kunci pencarian: ", (keyword:string) => {
                    searchBook(keyword);
                    showMenu();
                });
                break;

            case '4':
                console.log("Terima kasih telah menggunakan aplikasi ini!");
                rl.close();
                break;

            default:
                console.log("Pilihan tidak valid, silakan coba lagi.");
                showMenu();
                break;
        }
    });
}

console.log("\n=== Memulai Menu Interaktif ===");
showMenu();
