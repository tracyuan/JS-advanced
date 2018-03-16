/**
 * Created by qile on 2017/8/14.
 */
//Part 1
console.log(Boolean(undefined));
console.log(Boolean(null));
console.log(Boolean(0));
console.log(Boolean(NaN));
console.log(Boolean(1));
console.log(Boolean(""));
console.log(Boolean("abc"));
console.log(Boolean({}));
false;false;false;false;true;false;true;true;
if(new Boolean(false)){
    console.log("执行");
}
执行;
//Part 2
console.log(Number(undefined));
console.log(Number(null));
console.log(Number(true));
console.log(Number(false));
console.log(Number(""));
console.log(Number("abc"));
console.log(Number("123.345xx"));//
console.log(Number("32343,345xx"));
console.log(Number({x:1,y:2}));

console.log(parseFloat("123.345xx"));
console.log(parseFloat("32343,345xx"));
console.log(parseInt("123.345xx"));
console.log(parseInt("32343,345xx"));
NaN
0
1
0
0
 NaN
 NaN
NaN
 NaN
123.345
 32343
 123
 32343
//Part 3
console.log(String(undefined));
console.log(String(null));
console.log(String(true));
console.log(String(false));
console.log(String(0));
console.log(String(234));
console.log(String({x:1,y:2}));
undefined
 null
 true
 false
 0
 234
 [object Object]