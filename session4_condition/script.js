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
}else{
  console.log("Không là năm nhuận");
}

let month = parseInt(prompt("Nhập vào 1 tháng"));
if()
