console.log('Woking Console Testing');
// TOPIC SLICE AND SPLICE
// ----------------------------------------------


// Splice Topics
//Gunanya menambahkan Value baru atau bisa juga menghapus value dan sekaligus bisa langsung menambahkan
// Contoh Syntax penggunaan splice()
// .splice(IndexAwal,Berapamaudihapus,elementbaru1,elementbaru2...);
let MyDataMining = ['Senin','Selasa','Rabu','Kamis','Jumat','Minggu'];
console.log('\n\nSebelum Splice : ' + MyDataMining.join(' - '));
MyDataMining.splice(5,0,'Sabtu');
console.log('\n\nSesudah Splice : ' + MyDataMining.join(' - '));



//Slice Topics
// Gunanya adalah untuk mengiris atau mengambil pada index tertentu...
// Contoh syntax :
// .slice(indexawal,indexakhir);
// Untuk penulisan index akhir harus diperhatikan, dikarenakan akan terjadi sedikit kesalah atau kebingungan. Cukup dicoba index terakhir karena itu sangat mudah.

let MyDataStorage = [];
MyDataStorage = ['Photos','Videos','Musik','Gift'];
console.log('\n\n Sebelum slice : ' + MyDataStorage.join(' - '));
let MyDataNew = MyDataStorage.slice(1,3); // Harus membuat varibel baru untuk menampung slice dari array baru yang dibuat. !!!!!
console.log('\n\n Sesudah slice : ' + MyDataNew.join(' - '));


// Penjelasan diatas sudah sangat jelas, jika tidak mengerti silakan dibaca lagi.