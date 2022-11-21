console.log('Learning First JavaScript');

//  Dibawah ini adalah beberapa contoh pop box :
// Note : Dari setiap website agak berbeda pop up box

//----------------------------------------------------------------------------
// Bisa memakai lebih dari satu alert sekaligus
// alert('!!!--Attention for this web--!!!');
//  alert('!!!--Attention for this web--!!!');
//  alert('!!!--Are you sure next--!!!');
//  alert('!!!--Shittt.. You are Hacking me--!!!');

//----------------------------------------------------------------------------
// Didalam prompt bedanya kita bisa memasukan sesuatu
// Prompt juga bisa mengembalikan nilai
// prompt('THIS IS A PROMT');
//----------------------------------------------------------------------------

// Contoh dibawah ini mengambil variabel dari prompt dan ditampilkan di alert

// var tapungText = prompt('THIS IS A PROMT');
// alert(tapungText);

//----------------------------------------------------------------------------
// Perbedaan Confirm dengan prompt adalah : confirm mengembalikan nilai Boolean
// Nilai True atau False jika OK = true,  jika FALSE = false
// confirm('Apakah kamu mencintaiku.??');

alert('Welcome TO CyberSecurity');
var benaratusalah = confirm('Apakah Anda ingin memasukan form prompt.??');

while(benaratusalah) {
    var saveName = prompt('Masukan nama anda');
    alert('Hai...' + saveName);

    benaratusalah = confirm('Apakah ingin memasukan lagi.??');
}
alert("Terima Kasih telah berkunjung coderss...");

// Contoh singkat looping and input varibel diatas menggunakan pop up box