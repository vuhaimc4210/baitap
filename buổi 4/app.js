
//object - đối tượng
//key - value
//properties (thuộc tính)
//methods (phương thức) : là 1 function không tên

/*
const person = {
    name: "Peter",
    age: 18,
    color: "white",
    school: "FPT",
    sayHello: function(){
         console.log("Hellooo");
         return this;
    }
}


//object (C/R/U//D)
// R -read
console.log(person.name);
console.log(person["name"]);

const randomStr = "age";
// C - create
person.hair = "Yellow";
person.eye = "Blue";
person.sayGoodBye = function (name) {
    console.log(`GoodBye ${name}`);
}
console.log(person);

// U - update
    person.name = " Tony"
    console.log(person);
// D - delete
    delete person.name;
    console.log(person);

// Loop
for (let key in person){
    console.log(key, person[key]);
}

person.sayHello(); // khi chưa return this

person.sayHello().sayGoodBye("Hai"); //return this mới nối được sayGoodBye
*/

//function - hàm
// let x = 1;
// function sayHello(x) {
//      console.log(x);
// }

// sayHello(x);

//ex1: 
//Tạo 1 function nhập số n
//Tính n!
/*
function GiaiThua(n) {
    let GT = 1;
    for(i = 1; i <= n; i++){
        GT *= i;
    }
    return GT;
}
x = GiaiThua(3);
sayHello(x);
*/

//ex2:
//Tạo 1 function nhập vào 3 số a, b, c
//Trả về max
/*
function TimMax(a, b, c) {
    //return Math.max(a, b, c); // Sử dụng hàm Math.max trong js
    let max = a;
    if (max < b) {
        max = b;
    }
    if (max < c) {
       max = c 
    }
    return max;
}
let x = TimMax(-1,-5,-2);
sayHello(x);
*/

//ex3:
//Tạo 1 function nhập vào 1 mảng số
//Trả về tổng các phần tử
/*
function Tong(array){ 
    let sum = 0;
    for(i = 0; i < array.length; i++){
        sum += array[i];
    }    
    return sum;
}
let array = [3, 0, 3];
let x = Tong(array);
sayHello(x);
*/

//ex4:
//Tạo 1 function nhập vào 1 chuỗi
//Trả về chuỗi nghịch đảo

/*
function Converse(x) {
    let arr = x.split("").reverse().join("");
    return arr;
}
let x = "Haha";
let arr1 = Converse(x);
console.log(arr1);
*/

//ex5:
//Tạo 1 function nhận vào 1 chuỗi, kiểm tra xem chuỗi đó có phải chuỗi palindrome không
//Nếu có trả về true, sai trả về false
/*
function Converse(x) {
    let arr = x.split("").reverse().join("");
    return arr;
}
function Palind(x) {

    //return x.toLowerCase() === Converse(x.toLowerCase());//cách 1
    let arr1 = x.toLowerCase();
    let arr = Converse(arr1);
    if ( arr1 === arr){
        return true;
    }
    else{
        return false;
    }
}
let x = "HabaBah"
let kiemtra = Palind(x);
console.log(kiemtra);
*/
