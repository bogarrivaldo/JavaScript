console.log('Hai...this just testing consol');
// function mainrekursif() {
//     return mainrekursif();
// }
// mainrekursif();
// funciton diatas ini akan error atau maximal limit
// Diatas ini contoh pemanggilan function dalam function;
// -------------------------------------------------------------


// Dengan menggunakan basecase akan memberhentikan rekursif itu sendiri dan memanfaatkan return
function Testtingrecursion(x) {
    if (x > 10) { // Sengaja saya menggunakan lebih dari, agar bisa di tampilkan sampai 10
        // Tanpa menggunakan lebih dari juga ada cari lain... tapi saya menggunakna pendapat sendiri
        return; // return tidak mengembalikan apa-apa.. jadi function akan dihentikan ketika sudah mencapai kondisi dari if
    }
    
        console.log(x);
        Testtingrecursion(x+=1);
        
    
}
Testtingrecursion(1)

// Diatas ini contoh penggunaan recursion agar tidak looping terus,..