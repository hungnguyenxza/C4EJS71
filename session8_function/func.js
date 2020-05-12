// Khai báo
function helloWorld() {
    console.log("Hello from function");
}

// Gọi function
// helloWorld();
// helloWorld();
// helloWorld();


// Khai báo function sử dụng tham số

function xinChao(userName) {
    console.log(`Xin chào ${userName}`);
}

// let name = "Hùng";
// xinChao(name);

// xinChao("Tùng");
// xinChao("Quân");

// Tính tổng 2 số

function tinhTong2(a1, a2) {
    console.log("a1 = " + a1);
    console.log("a2 = " + a2);

    let s = a1 + a2;
    console.log(s);
}

// tinhTong2(2, 1);

function tinhTong3(a1, a2) {
    let s = a1 + a2;
    return s;
}

// let s = tinhTong3(5, 6);
// console.log(s);

function tinhTong4(a) {
    // if (typeof a == 'array') {
    let s = 0;
    for (let i = 0; i < a.length; i++) {
        s += a[i];
    }
    return s;
    // } else {
    //     return 0;
    // }
}

// let sum = tinhTong4([1, 2, 3, 4, 5]);
// console.log(sum);

function xinChao2() {
    console.log("Xin chào");
    //return;
}

// let n1 = xinChao2();
// console.log(n1); //

function xinChao3() {

    return;

    console.log("Hello world");
}

// xinChao3();


function printNumber(a, b) {
    if (b === 0) {
        return;
    }

    if (b < 0) {
        return;
    }

    // return a / b;

    let i = 0;
    while (true) {
        console.log(i++);
        if (i > 3) {
            return;
        }
    }
}

// console.log(printNumber());



function tinhGiaiThua(n) {
    if (n === 0) {
        return 1;
    }
    return n * tinhGiaiThua(n - 1);
}

// let gT = tinhGiaiThua(6);
// console.log(gT);

// Fibonacci
function fibonacci(n){
    if(n === 1 || n === 2){
        return 1;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
}
console.log(fibonacci(20));



