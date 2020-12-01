//1
const img = document.querySelectorAll('img');
console.log(img);

//2
const imgret = document.querySelectorAll('img[src^="img/image"]');
console.log(imgret);

//3
var links = document.querySelectorAll('a[href^="#"]');
console.log(links);

//4
const agah2 = document.querySelector('.animais-descricao h2');
console.log(agah2);

//5
const lastp = document.querySelectorAll('p');
lastp.forEach(function(item, index){
    ult = index;
});
console.log(lastp[ult]);


//1.1
const paragrafos = document.querySelectorAll('p');
paragrafos.forEach((item) => {
    console.log(item);
});

//2.1
paragrafos.forEach((item) => {
    console.log(item.innerHTML);
});

//3.1
const imgs = document.querySelectorAll('img');
imgs.forEach((item,index) => {
    console.log(item,index);
});

//4.1
let i=0;
imgs.forEach(() => {
    console.log(i++);
});

//5.1
i = 0;
imgs.forEach(() => console.log(i++));



