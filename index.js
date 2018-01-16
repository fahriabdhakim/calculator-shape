console.log(`-------------------LEVEL 0---------------------------`);
console.log(`well prepared`);
//
// Luas Persegi = tinggi * lebar
// Keliling Persegi = 2 * (tinggi + lebar)
// Luas Lingkaran = pi * jari - jari
// Keliling Lingkaran = pi * diameter
// Luas Kubus = 6 * (sisi * sisi)
// Volume Kubus = sisi * sisi * sisi
// Luas Tabung = (2 * pi * jari - jari * jari - jari) + (2 * pi * jari - jari * tinggi)
// volume Tabung = pi * (jari - jari * jari - jari) * tinggi
//


console.log(`-------------------LEVEL 1---------------------------`);

function luasPersegi(sisi) {
  return sisi * sisi
}
console.log(luasPersegi(8));

function kelilingPersegi(sisi) {
  return 4 * sisi
}
console.log(kelilingPersegi(10));

function luasLingkaran(jarijari) {
  return Math.PI * (jarijari * jarijari)
}
console.log(luasLingkaran(7));

function kelilingLingkaran(diameter) {
  return Math.PI * diameter
}
console.log(kelilingLingkaran(12));

function luasKubus(sisi) {
  return 6 * (sisi * sisi)
}
console.log(luasKubus(9));

function volumeKubus(sisi) {
  return Math.pow(sisi, 3)
}
console.log(volumeKubus(10));

function luasTabung(jarijari, tinggi) {
  return (2 * Math.PI * Math.pow(jarijari, 2)) + (2 * jarijari * tinggi)
}
console.log(luasTabung(10, 5));

function volumeTabung(jarijari, tinggi) {
  return Math.PI * Math.pow(jarijari, 2) * tinggi
}
console.log(10, 5);



console.log(`-------------------LEVEL 2---------------------------`);

function add(nomorA, nomorB) {
  return nomorA + nomorB
}
console.log(luasPersegi(add(10, 5)));