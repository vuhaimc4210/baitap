//tham khảo: dev mozila

// let,  const 
// let a = "stri";
// a =0;


// int string boolean(T/F)
//console.log(c) //in ra man hinh console
// let i = 1;
// while(i <= 10){
//     console.log(i);
//     i++;
// }
// let a=2;
// if(a % 2 == 0){
//     console.log("sochan");
// }
// else{
//     console.log("sole");
// }

//nhập: 
// let a = prompt("Your name");
// console.log(a);
// console.log(10);
// const name = ["peter", "Tony"];

/*
// element, index, length
//độ dài mảng name.length
//từng phần tử: element
const randomNumber = [0, 1, 2, 3, 4]
//Creat(thêm một phần tử mới vào mảng: đầu hoặc cuối)
randomNumber.push(300) // cuối
randomNumber.unshift(30) // đầu
//Read(đọc phần tử)
console.log(randomNumber[0]);
console.log(randomNumber[randomNumber.length-1]);
//Update
//Delete: xóa phần tử đầu tiên, cuối cùng, bất kì
randomNumber.shift();//đầu tiên
randomNumber.pop(); //cuối cùng
randomNumber.splice(0, 1); //bất kì(vị trí, số lượng)
*/

//exercise
/*
bài 1: Cho người dùng nhập vào 1 chuỗi số theo dạng 2,3,5,6,...
tách chuỗi thành mảng (google.split())
tính tổng toàn bộ phẩn tử
bài 2: cho người dùng nhâp vào 1 chuỗi bất kì
convert lại chuỗi viết hoa toàn bộ chữ cái đầu
VD: hello world -> Hello World
*/

//bai 1:
/*
const arr = prompt("Nhập chuỗi");
let arr1 = arr.split(",");
console.log(arr);
console.log(arr1);
let sum = 0;
for(let i = 0; i < arr1.length; i++){
    //sum += parseInt(arr1[i]);
    sum+=Number(arr1[i]);
}
console.log(sum);
*/

//bai 2
/*
let arr = prompt("Nhập chuỗi");
let arr1 = arr.toLowerCase();
let arr2 = arr1.split("");
console.log(arr2);
let size = arr.length;
console.log(size);
arr2[0] = arr2[0].toUpperCase();
for(let i = 0; i < size; i++){
    if(arr2[i] == ' '){
        arr2[i+1] = arr2[i+1].toUpperCase();
    }
}
let str = arr2[0];
for(let i = 1; i < size; i++){
   str+= arr2[i];
}
console.log(str);
*/

//bai 3
/*
let todoList = ["Do homework", "Go shopping"]
console.log(todoList);
let i = 0;
let todo;
while(i < 1){
    todo =  prompt("Nhập kí tự C/R/U/D/E").toLowerCase(); // nên đảo chữ đã nhập thành chữ thường
    if (todo === "c"){
        let NewTodo = prompt("Thêm phần tử");
        todoList.push(NewTodo);
        console.log(todoList);
    }
    else if (todo === "r"){
        console.log(todoList);
    }
    else if (todo === "u"){
        let NumberU = prompt("Sửa phẩn tử thứ");
        todoList[NumberU - 1] = prompt("Nội dung muốn sửa");
        console.log(todoList);
    }
    else if (todo === "d"){
        let NumberD = prompt("Xóa phần tử thứ");
        if(NumberD > todoList.length){
            console.log("Không có phẩn tử thứ", NumberD);
        }
        else{
            todoList.splice(NumberD - 1, 1);
            console.log(todoList);
        }
    }
    else if (todo === "e"){
        console.log("Dừng chương trình");
        i=1;
    }
}
*/
