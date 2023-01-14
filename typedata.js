//type data yg sering gunakan ada 3:
//string
//number
//array

//1. string
let contoh = "hafidz";
//let digunakan untuk declarasi variable
//variable adalah sebuah data yg memiliki nilai

console.log("hello dunia"); //log string
console.log(contoh);

contoh = "ucup"; //merubah nilai variable "contoh" dari "hafidz" menjadi "ucup"
console.log(contoh);

//2. number
let nomor = 10;
console.log(nomor);
nomor = 15;
console.log(nomor);

//3. array : array dimulai dari index ke 0
let contohArray = [0, 288, 3, 90, 5, 6, 7, 8, 9]; //value

console.log(contohArray);
//mengambil array index ke 0
console.log(contohArray[0]);

//mengambil array index ke 5
console.log(contohArray[5]);

console.log(contohArray[3]);

let contoh2 = [11, 12, 99, 65];
console.log(contoh2);

//belajar string
let test1 = "selamat siang"
console.log(test1)
test1 =  "selamat malam"
console.log(test1);

let test2 = "selamat sore"
console.log(test2 + test1);

//belajar number
let nomer = 12
console.log(nomer)

nomer = 15;
console.log(nomer);

let nomer2 = 10
console.log(nomer+nomer2);

let nomer3 = nomer+nomer2+20
console.log(nomer3);

//belajar perhitungan
console.log("belajar hitung : ");
// + - * / %
let hitung = 30;
console.log(hitung +5);
console.log(hitung -5);
console.log(hitung *2);
console.log(hitung /3);
console.log(hitung %3); 
console.log(33%3); //hasil bagi


//belajar array
let arraynomer = [1,2,3,4,5];
console.log(arraynomer);
console.log(arraynomer[2]);

let arraybeda = arraynomer;
console.log(arraybeda);

let arraybaru = [...arraynomer, 6, 7, ...arraynomer]
console.log(arraybaru);

//belajar menambah array atau mengubah nilai array
let menambaharray = [1,2,3];
console.log(menambaharray);
menambaharray.push(6) // menambah nilai baru dari akhir indeks array
console.log(menambaharray);
// menambaharray[7] = 10;
// console.log(menambaharray);
menambaharray = [...menambaharray, 28,21,23,11,24]
console.log(menambaharray);
menambaharray.unshift(5) // menambah nilai dari awal indeks array
console.log(menambaharray);
