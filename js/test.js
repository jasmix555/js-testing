console.log("アイウエオ")

let name = "jason"
console.log(name);

name = "name2"
console.log(name);

const myNumber = 124
console.log(myNumber);

const scndNum = 143
console.log(scndNum);

const answer = myNumber - scndNum
console.log(answer);

const firstNum = 242
console.log(firstNum);

const btn = document.getElementById("btn") ;
console.log(btn);

const btnText = "ボタン押したよ！"

btn.addEventListener("click", () => {
    console.log(btnText);
}); 
