/**
 * Created by qile on 2017/8/14.
 */
// Part11111111 隐式类型转换
//比较运算符 与 隐式类型转换
var a = 3;
var b = 4;
console.log(typeof (a>b),a>b);
console.log(typeof (a==b),a==b);
console.log(typeof (a<b),a<b);
boolean false;
boolean false;
boolean true;
//算数运算符 与 隐式类型转换 + -
var c = "img" + 3 +".jpg";
var d = "23" - 5;
console.log(c,d);
img3.jpg; 18;

//逻辑运算符 与 隐式类型转换 + -
var e = !23;
var f = !!34;//!!""   !!0   !!"abc"  !!undefined  !!null
var g = !!{};
console.log(e,f,g);
false true true

// 流程语句 与 隐式类型转换
var h = {x:1};
//var h = "";
if(h){
    console.log("h:",h);
}
h: Object {x: 1}


// Part2222222 显式类型转换
// Boolean();
// Number();
// String();
// Object();


//parseInt();
//parseFloat();

// toString();
// valueOf();


