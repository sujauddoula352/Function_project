function double(numbers){
    const double=numbers*2;
    console.log(numbers,double);
}
double(50);
console.log('----------------');
const num=70;
double(num);
console.log('----------------');
const  money=800;
double(money);
console.log('----------------');

function different(a,b,c){
    minus = a - b;
    console.log(a,b,'the is a different:',minus);
}
/** --------------Argument-------------- */
const fatherAge=60;
const sonAge=22;
/** --------------function call-------------- */
different(fatherAge,sonAge);