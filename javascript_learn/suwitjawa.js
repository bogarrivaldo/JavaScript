// Disesi ini Studi kasus membuat game suwitjawa simpel, menggunakan pop up box
// Berserta gambungan dari function random.

console.log('Hai..saya ready\n');
// Menentukan rules

do {
    var inputPlayer = prompt('Pilihan : gunting,batu,kertas');
    var lagiorno;

    var komputer = Math.random();
    // Menentukan pilihan computer atau menangkap nilai pilihan komputer
    if (komputer < 0.30) {
        komputer = 'batu';
    } else if (komputer >= 0.30 && komputer < .60) {
        komputer = 'gunting';
    } else if (komputer >= 0.60) {
        komputer = 'kertas';
    }
    if (komputer == inputPlayer) {
        alert('Hasil Draw');
        console.log(komputer + ' ' + ' ' + inputPlayer);
    } else if (komputer == 'batu' && inputPlayer == 'gunting') {
        alert('Anda Kalah');
        console.log(komputer + ' ' + ' ' + inputPlayer);
    } else if (komputer == 'gunting' && inputPlayer == 'kertas') {
        alert('Anda Kalah');
        console.log(komputer + ' ' + ' ' + inputPlayer);
    } else if (komputer == 'kertas' && inputPlayer == 'gunting') {
        alert('Anda Menang');
        console.log(komputer + ' ' + ' ' + inputPlayer);
    } else if (inputPlayer == 'batu' && komputer == 'gunting') {
        alert('Anda menang');
        console.log(komputer + ' ' + ' ' + inputPlayer);
    } else if (inputPlayer == 'gunting' && komputer == 'kertas') {
        alert('Anda Menang');
        console.log(komputer + ' ' + ' ' + inputPlayer);
    } else if (inputPlayer == 'kertas' && komputer == 'gunting') {
        alert('Anda kalah');
        console.log(komputer + ' ' + ' ' + inputPlayer);
    } else {
        alert('Maaf yang anda masukan tidak terdaftar');
    }
    lagiorno = confirm('Main lagi.???');

} while (lagiorno == true);
console.log('Oke,..se you valdo.');