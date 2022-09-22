// const randomnum =Math.random(100)
const arr = ["red", "yellow","aqua","blueviolet","green"]
const randomnum1 =arr[ Math.floor(Math.random( )*arr.length)]
console.log(randomnum1);



const bodytitle = document.getElementById("body")
console.log(bodytitle);
bodytitle.style.backgroundColor = randomnum1