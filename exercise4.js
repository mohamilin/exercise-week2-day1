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