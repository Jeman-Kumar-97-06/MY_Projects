var x = [1,2,3,4,5];
//Printing the Array:
console.log('\nPrint the whole array:-')
console.log(x)

//Printing Each element of array:
console.log("\nPrint each element of array:-")
x.forEach(item=>{console.log(item)})

//Shallow Copy :--
var arr1 = [1,2,3,4,5];
var arr2 = arr1;
arr1[0]  = 'Jeman';
console.log('\nShallow Copy:--')
console.log(arr1);
console.log(arr2);

//Deep Copy :--
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