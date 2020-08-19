/*
2. Buat sebuah function helper untuk convert temperatur Celcius ke Fahrenherit dan sebaliknya. Ikuti poin-poin dibawah ini:
        Buat sebuah function helper lalu gunakan pada function converternya. 
        Seperti contoh dibawah ini. Jadi kita tinggal membuat function helper dan function utama untuk convert fahrenheit ke Celcius

*/

//SOLVE

//function helper
function celciusStart(value) {
    return value * (9/5);
}

function celciusToFahrenheit(celcius) {
    return celciusStart(celcius) + 32;
}

celciusToFahrenheit(10);

