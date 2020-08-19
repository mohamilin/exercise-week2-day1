/*
1. Buat sebuah function untuk toko online kita. Ikuti poin-poin dibawah ini:
        Function mempunyai 2 parameter yaitu nama pembeli dan produk yang dibeli
        Function akan mengembalikan nilai “Terima kasih (nama pembeli) telah membeli produk (produk yang dibeli)”
        Panggil function dengan menggunakan console.log()

*/

//SOLVE
function store(pembeli, produk) {
    console.log("Terima kasih " + pembeli + " telah membeli produk " + produk);
}

store("amilin", "mobil");

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


/*
3. Kita akan membuat program untuk menghitung umur kucing dalam usia manusia. Poin-poinya adalah:
        Pada usia 1 tahun, umur kucing adalah 15 kali umur manusia
        Pada usia 2 tahun, umur kucing adalah 24 kali umur manusia
        Pada usia 3 tahun (> 24 tahun) dan seterusnya umur kucing adalah 4 kali umur manusia. 
            Jadi jika umur kucing saat ini 4 tahun berarti dalam kalendar tahun kucing, umurnya adalah 32 tahun.
        Buat sebuah ARROW function yang menerima parameter umur kucing berdasarkan perhitungan tahun manusia.

*/

//SOLVE

const ageCat = (age) => {
    if (age == 1) {
        alert("Umur Kucing 15 kali umur manusia");
    } else if(age == 2) {
        alert("Umur Kucing 24 kali umur manusia");
    } else {
        alert("umur kucing " + (24 + (age-2)*4) + " umur manusia");
        //return ageNow;
    }
}

// const ageNow = (age) => {
//     return 
// }

ageCat(Number(prompt("Umur Kucing ")));

/*
4. Buat sebuah function untuk mengubah format semua string menjadi huruf kecil.
    Menerima 1 parameter string
    Gunakan single line block function
    Output adalah string yang telah diubah formatnya menjadi lower case
    Gunakan built in method string
*/

//SOLVE

const lowString = string => alert(string + " menjadi " + string.toLowerCase());

lowString(prompt("Masukkan String Anda"));