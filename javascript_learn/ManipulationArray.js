console.log('Testing Console Enggine');
// Tambahan jika ingin menambah Array secara per index manual
let TestArray = [];
TestArray[0] = 'Bogar'; // Index pertama
TestArray[1] = 2; // Index Kedua
TestArray[3] = 'Andros';
// Hati-Hati dengan melangkah array.
// Nilainya akan empty atau undefined;
console.log(TestArray);

//---------------------------------------------------------------------
// Untuk penghapusan Array Seperti Dibawah ini.

let BogarArray = ['Unkab', 'Unsrat', 'Delasal', 'Unima', 'Politeknik'];
BogarArray[2] = undefined; // ini akan menghapus index ke dua menjadi undefined
// Menghapus dengan cara manual, ada cara lain menghapus menggunakan method array atau function array
console.log(BogarArray);

// Contoh menggunakan funciton atau method Join yang sudah ada secara default pada funciton di Array

// method = function --> Diingat
//---------------------------------------------------------------------
// Dibawah ini adalah contoh menggunakan method JOIN()
let Myfunctiontest = ['Javascript', 'C++', 'Python', 'Kotlin'];
console.log(Myfunctiontest); // Ditampilkan masih berbentuk object.


// Dibawah ini menampilkan dalam bentuk String menggunakan method join()
console.log('\n\n' + Myfunctiontest.join(' '));// pemisah string digunakan didalam kurung join kali ini saya menggunakan SPASI... jika tidak diisi akan bernilai default koma.

// Note : join('PEMISAH STRING MENGGUNAKAN APA')