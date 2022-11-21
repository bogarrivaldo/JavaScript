function Penjumlahantest(a, b) { // ini adalah function  Deklaraction & inisialisasi
    totalitas = a + b;
    return totalitas; // Menegmbalikan nilai

}
console.log(Penjumlahantest(10, 25) + '\n\n');


// -----------------------------------------------------------------------
// Dibawah ini adalah contoh functin yang tidak mengembalikan nilai



function MachinePerkalian() {
    var nilaiUtama = parseInt(prompt('Masukan nilai awal: '));
    var nilaiKedua = parseInt(prompt('masukan nilai kedua : '));
    totalPerkalian = nilaiUtama * nilaiKedua;
    console.log(totalPerkalian);
    return;

}
MachinePerkalian(); // Tidak diprint karena sudah ada dalam function