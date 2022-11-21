console.log('Connection console Ready.');
// FILTER :
// Dengan filter kita bisa mencari beberapa nilai array dan mengembalikan nilai itu dalam bentuk array juga.

let TanpungValues = ['Acer','Predator','Apple','samsung'];
let Seleksivalues = TanpungValues.filter(function(a){
    return a === 'Acer' || a === 'Predator';
})
realtext = Seleksivalues.join(' /-/ ');
console.log(realtext);
// Bisa juga manipulasi atau menggunakan operasi aritmatika untuk mendapatkan hasil, dengan memanfaatkan return pengembalian nilai.

//----------------------------------------------------
// FIND :
// menggunakan find, akan menghasilkan satu nilai dan  mencari satu nilai array yang pertama terdekat atau pertama ditemukan.
// Contoh :
let MyData = [10,11,13,12,20,22,25,21];
let Newdatabor = MyData.find(function (a) {
    return a < 20;
    
})
console.log(Newdatabor);
// Jika dilihat diprogram diatas menggunakan find, 11 akan pertama kali ditemukan kurang dari 20, karena aturan baca array dari kiri ke kanan.

