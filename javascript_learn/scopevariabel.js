// Contoh varibel global javascript
// ----------------------------------------------------------------------------------------------
var IniGlobal = 2;

function CreateFunctiontest() {
    return;
}
    console.log('Ini adalah variabel Global : ' + IniGlobal);
    console.log('----------------------------------------------------------------------------------------------');
    // ----------------------------------------------------------------------------------------------
    
    // Dibawah ini adalah variabel Local atau function scope
    
    function ScopeFunctiontest() {
        var Nilailocal = 10;
        console.log(Nilailocal);
        console.log('----------------------------------------------------------------------------------------------');
        return;
        
    }
    ScopeFunctiontest();
    // console.log(Nilailocal); // ini akan error, karena javascript bersifat function scope.
    //  Tidak bisa memanggil variabel local di luar function
    // ----------------------------------------------------------------------------------------------

// Dibawah ini juga ada namanya NAME CONFLICT
// yang nama variabel sama, tapi scope berbeda.
// Contoh dibawah ini

var samajo = 1;
var nametesting = 5; 
function Testingnameconflict() {
    console.log('\n\nName Conflict');
    nametesting = 10; // Dideteksi sudah ada varibel dibuat,..dluar function..maka nilainya akan ditimpa kembali menjadi 10
    var samajo = 2; // Jika tidak menggunakan var, maka javascript akan mendeteksi didalam function tidak membuat varibel baru.
    // walaupun nama varibel sama, tapi scope berbeda,..javascript tidak akan mengambil yang global.atau nilainya tidak diconvert
    console.log('Ini adalah varibel local name conflict : ' + samajo);
    return;
}

Testingnameconflict();
// Jika dilihat ini, nilai varibel global yang diambil, dikarenakan.. terdekteksi dalam function membuat varibel baru dengan VAR
console.log('Name Conflict Global variabel : ' + samajo);
// Jika dilihat dibawah ini nilai terkonversi dikarenakan, difunction tidak terdekteksi membuat varibel
console.log('tanpa membuat variabel baru dalam function : ' + nametesting);