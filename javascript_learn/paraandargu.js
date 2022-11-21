console.log('Topic Parameter and Argument');
console.log('-----------------------------\n\n');

// Dibawah ini contoh beberapa function
//---------------------------------------------------
function PembagianMachine() {
    var nilaiUtama = 5,
        nilaiKedua = 2;
    return nilaiUtama / nilaiKedua; // Memanfaatkan return pengembalikan nilia pembagian
}
console.log('Hasilnya adalah = ' + PembagianMachine());
//---------------------------------------------------
// Dibawah ini penulisan function agak berbeda
function penguranganMachine() {
    var val1 = 10,val2 = 12;
    return val1 - val2;
}
var inFunction = penguranganMachine();
console.log('Hasil pengurangan = ' + inFunction);

//---------------------------------------------------

// Argument menggunakna function
// Jadi penjelasan singkatnya adalaha
// pertama menggunakan function penjumlahan didalam argument antara dua nilai,
// lalu menggunakan function dengan nilai sama tapi arimatika perkalian
function learnPenjumlahan(a,b){
    
    return a + b;
}
function learnPerkalian(a,b) {
    return a * b;
}
console.log(learnPerkalian(learnPenjumlahan(5,5), learnPenjumlahan(10,10)));
// Jangan bingung melihat diatas, cukup perhatikan dengan segenap hati wkwkw
// Masih banyak jenis penulisan argument, bisa disearch
//---------------------------------------------------