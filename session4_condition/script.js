let number = Number(prompt("Nhập 1 số"));

if (number > 8) {
  console.log("Lớn hơn 8");
}
if (number < 8) {
  console.log("Nhỏ hơn 8");
}
if (number === 8) {
  console.log("Bằng 8");
}

let year = parseInt(prompt("Nhập năm"));
if ((year % 4 === 0 && year % 100 !== 0)
  || (year % 100 === 0 && year % 400 === 0)) {
  console.log("Năm nhuận");
} else {
  console.log("Không là năm nhuận");
}

let month = parseInt(prompt("Nhập vào 1 tháng"));
// if (month === 1 || month === 3
//   || month === 5 || month === 7
//   || month === 8 || month === 10
//   || month === 12
// ) {
//   console.log("31 ngày");
// } else if (month === 2) {
//   console.log("28 hoặc 29 ngày");
// } else if (month === 4 || month === 6
//   || month === 9 || month === 11) {
//   console.log("30 ngày");
// } else {
//   console.log("Nhập sai");
// }

switch (month) {
  case 1:
  case 3:
    console.log("31");
    break;
  case 2:
    console.log("28 hoặc 29");
    break;
  case 4:
    console.log("30");
    break;
  case 5:
    console.log("31");
    break;
  default://optional
    console.log("Nhập sai");
}