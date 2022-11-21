console.log('Test Console Working');
// Method shift() : Gunanya adalah menghapus data index awal pada Array, Intinya hanya kebalikan dari pada pop dan push.... Kebalikannya adalah jika pop menghapus diakhir index array,. kalau shift menghapus diawal index array.

// Pastikan dibaca diatas valdo..!!!
console.log('\n\nMethod shift() :');
let ShiftArraytest = ['Kamera', 'Eartphone', 'Kipas', 'Mouse', 'Monitor'];
console.log(ShiftArraytest.join(' - ')); // Menampilkan bertipe string array
ShiftArraytest.shift(); // Menghapus data diawal index array
console.log(ShiftArraytest.join(' - ')); // Menampilkan hasil sesudah dihapus

//--------------------------------------------------------------------

// Method unshift() : Gunanya adalah MENAMBAHKAN data diindex awal pada Array. Intinya hanya kebalikan dari push and pop,...kalau push() menambahkan diakhir data indexnya.. kalau unshift() MENAMBAHKAN datanya di awal index Array.
console.log('\n\nMethod unshift()  :');
let UnshiftArraytest = ['valdo','andros','bogar'];
console.log(UnshiftArraytest.join(' - ')); // Menampilkan Array bertipe string
UnshiftArraytest.unshift('Mygaming','Progaming');// Menambahkan diawal index array
console.log(UnshiftArraytest.join(' - ')); // Jika ditampilkan lagi, Data araynya di index awal sudah bertambah.


let ReviewData = [];
ReviewData = ['Macau','Sydney','Filipin','Afrika'];
console.log('\n\n' + ReviewData.join(' / '));
ReviewData.unshift('HackingTogel4D');
console.log(ReviewData.join(' - '));