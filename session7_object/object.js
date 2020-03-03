// let myInfo = {
//   "name": "Hung",
//   "name": "Hunggggggggggggg",
//   'age': 20,
//   country: 'Vietnam',
// };
// // console.log(myInfo);
// myInfo['phone'] = '0123456789';
// myInfo.school = 'DH BK';
// myInfo.age = 30;
// delete myInfo.name;

// for (const key in myInfo) {
//   if (myInfo.hasOwnProperty(key)) {
//     const element = myInfo[key];
//     console.log(key + ": " + element);
//   }
// }

// I. Khai báo 1 object, chứa thông tin 1 điện thoại:
// chứa tên, giá, hãng sx
// 1. in thông tin đt ra màn hình
// 2. cho người dùng nhập thêm năm sản xuất của đt này
// 3. cho ngdung sửa 1 value của đt này
// 4. nhập 1 key, xóa thông tin này trong đt
// let phone = {
//   'name': 'Galaxy Note',
//   price: 10e6,
//   'brand': 'samsung',
// }
// for (const key in phone) {
//   const element = phone[key];
//   console.log(key + ": " + element);
// }

// let releaseDate = parseInt(prompt("Nhập năm sản xuất"));
// phone.releaseYear = releaseDate;
// phone['releaseYear'] = releaseDate;

// console.log("\n========= Thêm thành công ========\n");
// for (const key in phone) {
//   const element = phone[key];
//   console.log(key + ": " + element);
// }

// let editKey = prompt("Bạn muốn sửa gì?"); //name
// while (!phone.hasOwnProperty(editKey)) {
//   editKey = prompt("Bạn muốn sửa gì???");
// }
// phone[editKey] = prompt("Giá trị mới");
// console.log("\n========= Sửa thành công ========\n");
// for (const key in phone) {
//   const element = phone[key];
//   console.log(key + ": " + element);
// }
// let removeKey = prompt("Bạn muốn xóa gì?"); //name
// while (!phone.hasOwnProperty(removeKey)) {
//   removeKey = prompt("Bạn muốn xóa gì???");
// }
// delete phone[removeKey];
// console.log("\n========= Xóa thành công ========\n");
// for (const key in phone) {
//   const element = phone[key];
//   console.log(key + ": " + element);
// }

// II. Khai báo 1 mảng chứa thông tin 3 đt, mỗi đt gồm:
// tên, giá, hãng sx
// 1. in ds đt ra màn hình (không sử dụng log mảng và log object)
// 2. cho ngdung thêm 1 đt mới vào mảng, bằng cách cho ngdung nhập tên, giá, hãng rồi thêm đt mới này vào mảng
// 3. ngdung nhập stt và key muốn sửa, cho người dùng sửa thông tin của đt có stt đó
// 4. nhập stt, xóa đt có stt đó
// 5. Nhập 1 tên đt, tìm đt có tên đó (ko phân biệt hoa thường)
// 6. Nhập 2 số, tìm các đt có giá nằm giữa 2 số đó
// 7. Nhập 1 hãng SX, tìm các đt thuộc hãng sx đó
// 8. sắp xếp DS đt theo tên, theo giá, (tăng, giảm dần)

let listPhone = [
  {
    name: 'Galaxy Note',
    price: 10e6,
    brand: 'Samsung'
  },
  {
    name: 'Xperia 1',
    price: 11e6,
    brand: 'Sony'
  },
  {
    name: 'iPhone 11',
    price: 12e6,
    brand: 'Apple'
  },
];
for (let i = 0; i < listPhone.length; i++) {
  const phone = listPhone[i];
  console.log(i + 1);
  for (const key in phone) {
    const value = phone[key];
    console.log("\t" + key + ": " + value);
  }
  console.log('\t --- \t --- ');
}

let newPhoneName = prompt("Tên đt mới:");
let newPhonePrice = Number(prompt("Giá đt mới:"));
let newPhoneBrand = prompt("Hãng đt mới:");
let newPhone = {
  name: newPhoneName,
  price: newPhonePrice,
  brand: newPhoneBrand,
};
listPhone.push(newPhone);
console.log("======= Thêm thành công ======");
for (let i = 0; i < listPhone.length; i++) {
  const phone = listPhone[i];
  console.log(i + 1);
  for (const key in phone) {
    const value = phone[key];
    console.log("\t" + key + ": " + value);
  }
  console.log('\t --- \t --- ');
}
