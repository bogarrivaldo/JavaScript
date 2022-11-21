// Dibawah ini adalah latihan penggunaan for dengan saya tambahkan kondisi if else
//----------------------------------------------------------------------------
// for (var index = 1; index <= 10; index++) {
//     if (index === 1) {
//         console.log('I Dont Care What The People Say');
//     }
//     else if (index === 2) {
//         console.log('Terus semangat');
//     }
//     else if (index === 3) {
//         console.log('Jangan peduli kata orang');
//     }
//     else if (index === 4) {
//         console.log('Ingat harus sukses');
//     }
//     else if (index === 5) {
//         console.log('Penyesalan datang di akhir');
//     }
//     else if (index === 6) {
//         console.log('Jangan gampang menyerah');
//     }
//     else if (index === 7) {
//         console.log('Jangan lupa berdoa');
//     }
//     else if (index === 8) {
//         console.log('Apa keinginan kamu harus tercapai');
//     }
//     else if (index === 9) {
//         console.log('Jangan ikut ikut prinsip orang');
//     }
//     else if (index === 10) {
//         console.log('Berani mencoba');
//     }
//     else {
//         console.log('\n\nNilai melebihi 10');
//     }
// }
//----------------------------------------------------------------------------

// for (var angkot = 1; angkot < 10; angkot++) {

//     for (var angkot; angkot >= 7 && angkot <=10; angkot++) {
//         console.log('Angkot No. ' + angkot + ' sedang tidak beroperasi.');;

//     }
//     console.log('Angkot No. ' + angkot + ' beroperasi dengan baik.');
// }
//----------------------------------------------------------------------------

// Dibawah ini adalah Studi kasus di berikan bang sandika.
// Dan saya menggunakan metode Looping dengan cara saya sendiri

var angkot = 1;
while (angkot <= 10) {
    console.log('Angkot No. ' + angkot + ' beroperasi dengan baik.');
    angkot++;
    for (var angkot; angkot >= 7 && angkot <= 10; angkot++) {
        console.log('Angkot No. ' + angkot + ' sedang tidak beroperasi.');

    }


}