console.log('Connecting console ready');
// Dengan menggunakan SORT kita bisa mengurutkan suatu varibel number yang ada di array
// Contoh .sort()
// Jika dilihat nilai dari array dibawah ini acak.
let Myarray = [1,4,6,7,,8,3,4,6,8,6,];
Myarray.sort(); // Fuction sort akan mengatasi masalah itu.
console.log(Myarray.join(' - '));

// Hati-hati terhadap masalah jika ada nilai seperti 10,karena dengan sort akan membaca nilai awalnya dulu.
// Contoh :
let Attention = [1,6,4,2,3,7,8,10,30,50,9];
Attention.sort();
console.log(Attention);
// Jika dilihat angka 10 akan dibaca kedua dari 1 karena sort membaca nilai depannya dluan.
// Untuk mengatasi ini bisa dimanipulasi dengan mengggunakan function dengan mengembalikan nilai aritmatika
// Contoh :
Attention.sort(function(a,b) {
    return a  - b;
})
console.log(Attention);
// Jika dijalankan akan berbeda dengan sort sebelumnya.