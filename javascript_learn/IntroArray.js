// First Learning Array
console.log('Cheking Console Ready.');
// Cara contoh penulisan Array sederhana dibawah ini
let ArrayValues = ['Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu', 'Minggu'];
console.log('\n\n\nDaftar Nama Hari \n\n');
for (let awalan = 0; awalan < ArrayValues.length; awalan++) {
    console.log(ArrayValues[awalan]);
}

// Dibawah ini juga contoh penulisan Array yang Arraynya di deklarasi dulu
let DecArray = [];
DecArray = ['Aldo', 'Andros', 'Val', 'Koko', 'Valdo', 'Rivaldo', 'Bogar'];
console.log('------------------------------');
console.log('\n' + DecArray[3]);
console.log(typeof (DecArray));

// Ada juga dinamakan Array multiDimension
// Array bisa bersarang sampai berapa pun atau sampai berapa dimensipun
let MultDimensionArray = [];
MultDimensionArray = ['Bogar',1,[9,3,1]];// index ke =  2 adalah multiDimension Array
console.log(MultDimensionArray[2][1]); 
// Contoh pemanggilan Array MultiDimension seperti Cl diatas ini