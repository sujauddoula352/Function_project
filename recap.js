function add(price1,price2){
    const total = price1 + price2;
    return total;
}
const bill=add(50,80);
console.log(bill);


function add2(price1,price2){
    return price1+price2;
}
const bill2=add(50,80);
console.log(bill2);


function doMath(num1,num2){
    const sum=num1+num2;
    const minus=num1-num2;
    const multiply=sum/minus;
    const result=multiply*2;
    return result;
}
const output=doMath(500,380);
console.log(output)
