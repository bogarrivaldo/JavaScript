// Note  : bisa juga tanpa menggunakan break, sehingga antara case utama
// case berikutnya akan tetap berjalan tanpa dihentikan oleh break


var bersar, pil;
bersar = confirm('Ada anda ingin lanjut ke program');
if (bersar === true) {
    pil = prompt('Masukan nama :');
    switch (pil) {
        case 'rosa':
            console.log('Hi..rosa, semoga nga bahagia ne.');
            break;
        case 'slat':
            console.log('Hi...slatt,kita so nda berharap sekarang');
            break;

        default:
            console.log('Maaf itu bukan nama anda.');
            break;
    }
} else {
    console.log('Byeee...program');
}