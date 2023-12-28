var x = [1,2,3,4,5];
//Printing the Array:
console.log('\nPrint the whole array:-')
console.log(x)

//Printing Each element of array:
console.log("\nPrint each element of array:-")
x.forEach(item=>{console.log(item)})
 
//Shallow Copy :-- arr1 points to [1,2,3,4,5] in memory and arr2 points to arr1 ie., [1,2,3,4,5] in memory. changing one reflects in both.
var arr1 = [1,2,3,4,5];
var arr2 = arr1;
arr1[0]  = 'Jeman';
console.log('\nShallow Copy:--')
console.log(arr1);
console.log(arr2);

//Deep Copy :-- arr1 points to [1,2,3,4,5] in mem and arr2 points to another [1,2,3,4,5] saved in different location in mem. 
//changing one doesn't change another.
var arr1 = [1,2,3,4,5];
var arr2 = [];
function deepCopyArr(arr1,arr2){
    for(var i=0;i<arr1.length;i++){
        arr2[i] = arr1[i];
    }
}
deepCopyArr(arr1,arr2)
arr1[0] = 'Jeman';
console.log('\nDeep Copy:--')
console.log(arr1);
console.log(arr2);

//Accessor Functions
var arr = [1,2,3,4,5,'jeman','Doom','jk',5];
console.log('\nFinding index of an element:\n\tPrints first match. prints "-1" if not found.')
console.log(arr.indexOf('jeman'))
console.log('\nFinding index of Last match. prints "-1" if not found:')
console.log(arr.lastIndexOf(5))

//Mutator Functions
var arr = ['Doom 1993','Doom II: Hell on Earch 1994','The Ultimate Doom 1995','Doom 64 1997','Doom 3 2004'];
    //Slice function:-
var arr2 = arr.slice(1,4)
console.log(arr2)

    //Splice function:-
var arr = ['a','b','c','d','e'];
arr.splice(3,2,9,10,11);
console.log(arr);

    //map() function:-
var arr = [2,3,4];
function fun(item){
    return item**2;
}

var newArr = arr.map(fun);
console.log(newArr);

    //forEach() function:- don't return anything inside the callback function
var arr = [2,3,4];
var arrf = [];
function fun(item){
    arrf.push(item);
}
arr.forEach(fun);
console.log(arrf);

    //every() function :--
function isEven(item){
    return item%2==0;
}

var nums = [2,4,5,6,8,10,11];
var even = nums.every(isEven);
console.log(even) //prints true only if isEven returns true for every element.



