
function submit(e) {
    if (e.key === 'Enter') {
        login();
    }
}

function login() {
    const username =
        document.getElementById('username').value;

    const password =
        document.getElementById('password').value;

    if (username === '') {
        alert("Enter username");
        return;
    }

    if (password === '') {
        alert("Enter password");
        return;
    }
    if (username === 'admin'
        && password === '123456') {
        alert('Login successful');
        window.location.href = 'index.html';
        return;
    }

    alert('Username or password is incorect');

}

let s = 'Hello world';
let n = 10.5;
let b = true;
let arr = [1, 2, 3, 4, 5];
let o = { name: 'Hung', 'age': 20, "school": "BKHN"
,farvorite: ["1", "2", '3'] };

// console.log(o);
// console.log(JSON.stringify(o));

let stringify = '{"name":"Hung","age":20,"school":"BKHN","farvorite":["1","2","3"]}';


let object = JSON.parse(stringify);
// console.log(object);
// console.log(object.name);
// console.log(object.age);
// console.log(object.farvorite);

//products.html
let person = { name: 'Hung', 'age': 20, "school": "BKHN"
,farvorite: ["1", "2", '3'] };

// quá trình lưu vào localstorage
// sử dụng stringify
localStorage.setItem('person', JSON.stringify(person));

//detail.html
//quá trình parse dữ liệu string trong localstorage
//về 1 object trong js
let personSelected = JSON.parse(localStorage.getItem('person'));
console.log(personSelected);





