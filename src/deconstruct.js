

var foo = {
    bar:1,
    baz:2
};

var {bar,baz} = foo;


var tenses = ["me","you","he"];

var [first,second] = tenses;

console.log('first:'+first+'second:'+second);


var foo = 2;

var obj = {
    bar:1,
    foo
};

console.log(obj);


console.log('================================================');

var weight = 100;
var height = 2;


function calBmi({ weight,height,callback,max = 1000}){

    var bmi = weight/Math.pow(height,2);
    if(bmi>max){
        console.log('error!');
    }

    if(callback){
        callback(bmi);
    }

}

calBmi({weight,height,callback:function(bmi){
    console.log("the bmi is "+ bmi);
}});