// for (let index = 2; index < 11; index++) {
//   // console.log("Hello world");
//   console.log(index);
// }
// for (let index = 10; index > 0; index -= 2) {
//   // console.log("Hello world");
//   console.log(index);
// }

// let m = parseInt(prompt("Nhập m:"));
// let n = parseInt(prompt("Nhập n:"));
// let a, b;
// // Math.max(), Math.min();
// a = (m <= n ? m : n);
// if (m <= n) {
//   // for (let i = m; i <= n; i++) {
//   //   console.log(i);
//   // }
//   a = m; b = n;
// } else {
//   // for (let i = n; i <= m; i++) {
//   //   console.log(i);
//   // }
//   a = n; b = m;
// }

//B1: kb: a, b vs a = min(m, n), b = max(m, n);
//B2: for a => b;

// // Tính tổng
// let m = 10;
// let s = 0;
// for (let i = 0; i <= m; i++) {
//   s = s + i;// s += i;
// }
// console.log(s);

// s = 0;
// for (let i = 1; i <= M; i++) {
//   let giaiThua = 1;
//   for (let j = 1; j <= i; j++) { // Tính giaithừa
//     giaiThua = giaiThua * j;
//   }
//   s = s + giaiThua;
// }
// s = 1;
// let giaiThua = 1;
// for (let i = 2; i <= M; i++) {
//   giaiThua = giaiThua * i;
//   s = s + giaiThua;
// }

// let n = Number(prompt("Nhập N"));
// while (n < 8) {
//   n = Number(prompt("Nhập lại N >= 8"));
// }
// console.log(n);

// let pass = prompt("Nhập mk:");
// while (pass.length < 8) {
//   pass = prompt("Mk quá ngắn, nhập lại: ");
// }
// console.log(pass);

//Nhập số chẵn > 10
// let n = parseInt(prompt("Nhập N"));
// while (!(n > 10 && n % 2 === 0)) {
//   n = parseInt(prompt("Nhập N"));
// }
// console.log(n);

// let pass = prompt("Nhập Mk");
// if(!(pass.length >= 8 && pass.search('@') >= 0)){
//   pass = prompt("Nhập lại mk");
// }
// console.log(pass);

let n = parseInt(prompt("Stt fibonacci: "));
let f1 = 1, f2 = 1;
let count = 2;
for (let i = 1; i < n / 2; i++) {
  f1 = f1 + f2;
  count++;
  f2 = f2 + f1;
  count++;
}
console.log(`f${count-1}: ${f1}, f${count}: ${f2}`);
