// Episode kali ini membahas arguments or array [ Array Arguments ]
// atau pembahasan hari ini membahas sudo variabel
// sedangkan episode sebelumnya membahas argument

function TestArray() {
    return arguments;
}

console.log(TestArray('Bogar',4,'thefirst'));

function TestKali() {
    var Totalitas = 1;
    for(var starting = 0; starting < arguments.length; starting++){
        Totalitas *= arguments[starting];
        
    }
    return Totalitas;
}

console.log(TestKali(5,5,10));