// console.dir(document.getElementById("title"));
// console.dir(document.getElementById("title").innerHTML);//

let idTitle = document.getElementById("title");

idTitle.innerHTML = "Welcome C4EJS 71";

let classContent = document.getElementsByClassName("content");

console.dir(classContent);

for (let i = 0; i < classContent.length; i++) {
    const dom = classContent[i];
    dom.innerHTML = "Welcome C4EJS 71";
}

//Thay đổi style
idTitle.style.color = 'green';
idTitle.style.backgroundColor = 'yellow';


//idTitle.innerHTML = "Welcome C4EJS 71<h1>Đây là thẻ h1 by JS</h1>";

let listFoods = [
    "Phở",
    "Bún cá",
    "Mì tôm",
    "Cơm cuộn",
    "Cơm rang",
    "Cơm rang 2",
    "Cơm rang 3",
];

let listImgs = [
    'https://ameovat.com/wp-content/uploads/2016/05/cach-lam-com-chien-duong-chau-600x481.jpg',
    'https://ameovat.com/wp-content/uploads/2016/05/cach-lam-com-chien-duong-chau-600x481.jpg',
    'https://ameovat.com/wp-content/uploads/2016/05/cach-lam-com-chien-duong-chau-600x481.jpg',
    'https://ameovat.com/wp-content/uploads/2016/05/cach-lam-com-chien-duong-chau-600x481.jpg',
    'https://ameovat.com/wp-content/uploads/2016/05/cach-lam-com-chien-duong-chau-600x481.jpg',
    'https://ameovat.com/wp-content/uploads/2016/05/cach-lam-com-chien-duong-chau-600x481.jpg',
];

let listFoodAndImgs = [
    {
        food: 'Phở',
        img: 'https://ameovat.com/wp-content/uploads/2016/05/cach-lam-com-chien-duong-chau-600x481.jpg',
        description: 'Đây là món phở',
        linkDetail: 'https://ameovat.com/wp-content/uploads/2016/05/cach-lam-com-chien-duong-chau-600x481.jpg',
    },
    {
        food: 'Bún cá',
        img: 'https://ameovat.com/wp-content/uploads/2016/05/cach-lam-com-chien-duong-chau-600x481.jpg',
        description: 'Đây là món bún cá',
        linkDetail: 'https://ameovat.com/wp-content/uploads/2016/05/cach-lam-com-chien-duong-chau-600x481.jpg'
    },
    {
        food: 'Mì tôm',
        img: 'https://ameovat.com/wp-content/uploads/2016/05/cach-lam-com-chien-duong-chau-600x481.jpg',
        description: 'Đây là món mì tôm',
        linkDetail: 'https://ameovat.com/wp-content/uploads/2016/05/cach-lam-com-chien-duong-chau-600x481.jpg'
    },
]


// let ulFoods = document.getElementById("foods");
// ulFoods.innerHTML = 
//     `<li>
//         Cơm rang
//         <img width='100' src='https://ameovat.com/wp-content/uploads/2016/05/cach-lam-com-chien-duong-chau-600x481.jpg'/>
//     </li>`;

// for (let i = 0; i < listFoodAndImgs.length; i++) {
//     const foodAndImg = listFoodAndImgs[i];
//     const food = foodAndImg.food;
//     const img = foodAndImg.img;
//     let htmlFood = `<li>
//                         <a href="${img}">
//                             ${food}
//                             <img src="${img}" width="100" />
//                         </a>
//                     </li>`;
//     ulFoods.innerHTML += htmlFood;
// }

let tbody = document.getElementById('foods');
for (let i = 0; i < listFoodAndImgs.length; i++) {
    const food = listFoodAndImgs[i];
    
    let html = `<tr>
                    <td>${i + 1}</td>
                    <td><img src="${food.img}" width="100"></td>
                    <td>${food.food}</td>
                    <td>${food.description}</td>
                </tr>`;

    tbody.innerHTML += html;
}

/* Lấy dữ liệu từ trang thegioididong.com
Chọn khoảng 5 đt, lấy thông tin gồm:
Tên - Hãng - Giá - Ảnh - Đường link đến chi tiết đt
I. Hiện thị theo bảng danh sách đt này theo mẫu:
    1. Mặc định
    2. Danh sách được filter theo 1 hãng
    3. Danh sách được fitler theo 1 khoảng giá (VD: từ 10 - 20 triệu)
    4. Danh sách được sắp xếp theo tên, hãng, giá
II. Khi click vào đường link, mở ra tab mới đến trang chi tiết đt.
*/

