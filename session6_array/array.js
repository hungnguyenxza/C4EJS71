let arr = [1, 2, 3, 4, 5];
let listNumbers = [1, 2, 3, 4, 5];
let listNames = ['Quang', "Duy", `Tung`];

// console.log(arr);
// // console.log(listNumbers);
// // console.log(listNames.length);

// arr.push(10);
// console.dir(arr);
// arr.push(11, 12, 13, 14);
// console.table(arr);
// arr.unshift(20);
// console.dir(arr);
// arr.unshift(21, 22, 23);
// console.table(arr);

// console.log(arr[14]);
// console.log(arr[-1]);

for (let index = 0; index < arr.length; index++) {
  const element = arr[index];
  console.log(element);
}
console.log(arr);
// console.log(arr[1]);
// arr[1] = 500;
// arr[arr.length] = 500;
// arr[arr.length] = 500;
// arr[arr.length] = 500;
// console.log(arr);
arr.splice(1, 2);
console.log(arr);
let a = arr.pop();
let b = arr.shift();
console.log(`a = ${a}, b = ${b}`);
console.log(arr);

let arr = [];
let length = 5;
for (let i = 0; i < length; i++) {
  let n = parseInt(prompt("Nhập 1 số"));
  arr.push(n);
  // arr[i] = n; // Không nên
}
console.log("STT: Giá trị");
for (let i = 0; i < arr.length; i++) {
  console.log(`${i + 1}: ${arr[i]}`);
}

console.log("===== Tổng =====");
let sum = 0;
for (let i = 0; i < arr.length; i++) {
  sum += arr[i];
}
console.log(`Tổng: ${sum}`);
console.log(`Trung bình: ${sum / arr.length}`);

let isExist = false;
let count = 0;
let N = Number(prompt("Nhập 1 số"));
for (let i = 0; i < arr.length; i++) {
  const element = arr[i];
  if(element.toUpperCase() === N.toUpperCase()){
    isExist = true;
    count++;
    break;
  }
}
if (count > 0) {
  console.log("Có tồn tại, và có "+ count + " số trùng");
} else {
  console.log("Không tồn tại");
}


let stt = parseInt(prompt("Vị trí muốn sửa"));
while(stt < 1 || stt > arr.length){
  stt = parseInt(prompt("Nhập đúng vị trí: "));
}

arr[stt - 1] = Number(prompt("Nhập giá trị mới:"));

Sắp xếp rồi in
Hàm sort
arr.sort(); // tăng dần
arr.reverse(); // đảo ngược thứ tự => giảm dần
Thuật toán

let arr = [6, 7, 3, 2, 9];
for (let i = 0; i < arr.length - 1; i++) {
  for (let j = i + 1; j < arr.length; j++) {
    if(arr[i] < arr[j]){
      đổi chỗ
      let temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
    }
  }
}
console.log(arr);




