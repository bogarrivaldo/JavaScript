console.log('Test Conection console\n\n');
// Method : push()   --> Gunanya adalah MENAMBAHKAN array baru dibaris akhir array..

let PushMethodTest = ['Whitehat','Blackhat','Anonymouse','Darkweb'];
console.log(PushMethodTest.join(' ')); // Dengan join akan mengubah object menjadi string
console.log('type-nya terconvert : ' + typeof(PushMethodTest.join())); // contoh menggunkan method atau function TYPEOF untuk melihat Typenya.

PushMethodTest.push('TopicPutih','TopicHitam'); // Jika ditampilkan array-nya lagi nilainya sudah ditambahkan diakhir index atau baris.

console.log('\n\nNilainya dipush atau ditambahkan : \n\n' + PushMethodTest.join(' - '));

// Method : pop() --> Gunanya menghapus satu data diakhir index array..
console.log('\n\n\nTopic : Method Pop()');
let PopMethodTest = ['Macan','Singa','Kerbau','Ular','Nyamuk'];
console.log(PopMethodTest.join(' - '));// Menampilkan bertipe string dengan join
PopMethodTest.pop(); // Menghapus satu index dari array akhir.
console.log(PopMethodTest.join(' - ')); // Jika ditampilkan lagi..akan hilang satu data array [nyamuk] karena sudah dihapus...tidak percaya coba dirun.

// Note : Jika menggunakan Pop() tidak bisa menghapus dengan satu function dan beberapa values dihapus... jika ingin menghapus lagi harus dipanggil lagi popnya. 
