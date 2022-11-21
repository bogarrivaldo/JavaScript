// Episode 21 JavaScript Dasar [Topic : IF ELSE]

// Dibawah ini adalah latihan if else 

// var nama = prompt('Masukan Nama : ');
// if (nama === 'rivaldo') {
//     console.log('Anda sukses login');
// } else {
//     console.log('Maaf anda harus daftar dulu');
// }
//--------------------------------------------------------------------

// Dibawah ini adalah studi kasus yang diberikan bang sandika gali

// for(var angkot = 1; angkot <= 10; angkot++){
//     if (angkot>=7 ) {
//         console.log('Angkot No. ' + angkot + ' sedang tidak beroperasi.');
//     }
//     else if (angkot <= 6) {
//         console.log('Angkot No. ' + angkot + ' beroperasi dengan baik.');

//     }
//     else {

//     }
// }


//--------------------------------------------------------------------


// Dibawah ini adalah studi kasus lagi yang diberikan bang sandika.
// Dan ini tidak mengikuti dari metode atau statement dari dia.
// Disini saya memakai metode statement saya sendiri

var totalAngkot = 10,
    angkot = 1;
for (var angkot; angkot <= totalAngkot; angkot++) {
    if (angkot <= 4 || angkot ==6) {
        console.log('Angkot No. ' + angkot + ' beroperasi dengan baik.');
    }
    else if (angkot === 7 || angkot === 9) {
        console.log('Angkot No. ' + angkot + ' sedang tidak beroperasi.');
    }
    else {
        console.log('Angkot No. ' + angkot +' sedang lembur');
    }

}


// Note : else if atau if,  bisa menggunakan 3 kondisi atau '|| || ||' di dalam
// kondisi if else pada JavaScript
// jika dilihat diatas saya hanya menggunakan 2 ||.


//  Dan juga tambahan, pergunakan tidak sama dengan, agar lebih komplex '!== '




//--------------------------------------------------------------------