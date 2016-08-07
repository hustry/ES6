


// Arrow function

const arr = [1,2,3];

var temp = [];

// expression body
arr.map(item => item+1);
arr.map((item,index) => item+1);


//statement body
arr.forEach(item =>{

    if(item === 1){
        temp.push(item);
    }

});


// bind this
var bob = {
    name:"hustry",
    frends:['f1','f2','f3'],
    print:function(){
        this.frends.map(item =>{
            console.log(this.name+'knows'+item);
        })
    }
};
