// Dini akan latihan perulangan dan pengondisian secara bersarang.
// Studi kasus petama diberikan bang sandika gali
// var value1 = 1,
//     limit = 5,
//     bintang = '';
// for (var value1; value1 <= limit; value1++) {
//     bintang += '*';


// }
// console.log(bintang);

///----------------------------------------------------------------------------

// Studi kasus kedua 


// var value1 = 1,
//     limit = 5,
//     bintang = '';
// for (var value1; value1 <= limit; value1++) {
//    for(var limejo = 0; limejo <= 50; limejo++){
//        bintang += '*';
//    }
//     bintang += '\n';



// }
// console.log(bintang);
///----------------------------------------------------------------------------

// Studi kases ketiga

// var value1 = 0,
//     limit = 2,
//     bintang = '';
// for (var value1; value1 <= limit; value1++) {
//    console.log(value1);
//     bintang += '*';
//     console.log(bintang);
// }


///----------------------------------------------------------------------------

// var a = 10,
//     b = 1;
// var text = '';
// var spacing = ' ';
// for (var a; a >= b; a--) {

//     text += '*';
//     console.log(a + text);
// }
///----------------------------------------------------------------------------
// Dibawah ini adalah studi kasus juga.
// Untuk lebih mendalam tentang For saya belum terlalu dalam,
//  jadi ketika saya membaca ini perdalam lagi

var garis = '';
var kata = '';
for (var v = 10; v >= 1; v--) {

    for (var s = 1; s <= v; s++) {
        kata += '*';
    }
    kata += '\n';
}
console.log(kata);












///----------------------------------------------------------------------------