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
  if (!Number(age)) {
    alert("WARNING... INPUT SALAH !");
  } else if (age == 1) {
    alert("Umur Kucing 15 kali umur manusia");
  } else if (age == 2) {
      alert("Umur Kucing 15 kali umur manusia");
  } else {
    alert("umur kucing " + (24 + (age - 2) * 4) + " umur manusia");
  }
};

ageCat(Number(prompt("Umur Kucing ")));
