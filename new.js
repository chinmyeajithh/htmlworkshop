let x=5;
console.log(typeof(x));
let firstname="chinmye";
let lastname="ajith";
let fullname=firstname+" "+lastname;
console.log(fullname)
let myst="my lil bro";
let y=myst.split(" ");
console.log(y);
let a1=[2,4,6];
let a2=[3,5,7];
let merge=[a1,a2];
console.log(merge);
let a3=[2,4,6];
let a4=[3,5,7];
let merge1=[...a1,...a2];
console.log(merge1);
let a5=[2,4,6];
let shift=a5.shift();
console.log(shift);
console.log(a5);
namefunc(8,10);
function namefunc(x,y){
    let sum=x+y;
    console.log("sum="+sum);
}
let myfunc=function(x,y){
    let sum=x+y;
    console.log("sum="+sum);
}
myfunc(5,10);
//or
let myfunc1=(x,y)=>{
    let sum=x+y;
    console.log("sum="+sum);
}
myfunc1(15,10);
//nested func
function multipflyby(factor){
    return function(num){
        return num  *factor;
    }
}
let double = multipflyby(2);
console.log(double(5));
//objects
let person={
    name:"sunny",
    age:20,
    work:"teacher",

    //methods
    add:function(x,y){
        return(x+y);
    }
}
console.log(person.age);
console.log(person.add(3,6));
const changeTextButton = document.getElementById('changeTextBtn');
const demoParagraph = document.getElementById('demo');

changeTextButton.addEventListener('click', function () {
  demoParagraph.textContent = 'Text changed!';
});