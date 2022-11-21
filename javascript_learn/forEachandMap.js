console.log('Testing Connecting Console');
// Topic Kali ini membahas tentang forEach
// Seperti looping for, tapi ini instan
// Gunanya dari forEach adalah menampilkan semua isi array yang hampir sama dengan kita buat menggunakan for,,...tapi dikali ini menggunakan Method : forEach(), 

// Untuk penggunaan forEach()
// ada dua values yang harus diperhatikan.
// e : element
// i : index
// Jika dilihat dicode dibawah ini, e akan menampilkan semua element yang ada didalam array.dan i akan menampilkan index

let Myprivating = ['Valdo','Bogar','Machine','Learning'];
Myprivating.forEach(function(e,i) {
    console.log(e + ' ' + i);
    return 0;
});

// Ini contoh menggunakan function deklaration
// Tapi hasilnya sama saja. dengan function expresion diatas
function Bogarjo (e){
    console.log(e);
    return 0;
}
Myprivating.forEach(Bogarjo);

// Diatas ini adalah  contoh penggunaan forEach dengan menggunakan, function expresion

//---------------------------------------------------------
// Contoh menggunakan map
let TestingMyfunction = ['Gofood','Goojek','Gopatner','Gocar'];
console.log('\n\n\n' + TestingMyfunction.join(' - '));
// Contoh diatas ini hanya contoh percobaan atau review lagi menggunakan join.

// Dibawah ini contoh penggunaan forEach dengan number + manipulasi dari element index / 'i' ditambahkan 1 agar starting value dimulai dari 1.
let numberTesting = [1,2,3,4,5,6,7,8,9];
numberTesting.forEach(function(e,i){
    console.log('\n\n\n' + e + ' index ke = ' + (i+1));
});
document.write(TestingMyfunction.join(' - '));
document.write(TestingMyfunction.forEach(function (e,i) {
    document.write('\nApps '+ i + e);
}))

// Diatas ini hanyalah contoh menggunakan document write untuk menampilkan values ke halaman HTML

// .Map Topics
//-------------------------------------------------------
// Dengan menggunakan .Map kita bisa mengembalikan nilai aray, seperti contoh return dibawah ini, 
let LearningArray = ['Say','Tell','What'];
let Newvalues = LearningArray.map(function(e,i) {
    console.log('\n\n\n' + (i+1) + ' = '+ e);
})

let TeknikBeda = LearningArray.map(function (e,i) {
    return i + 1;
    // Return ini mengembalikan nilai index yang ada di parameter dan ditambah 1, sehingga index awal bukan dimulai dari 0 melainkan dimulai dari 1.
})

console.log('\n\n\n' + TeknikBeda.join(' - '));