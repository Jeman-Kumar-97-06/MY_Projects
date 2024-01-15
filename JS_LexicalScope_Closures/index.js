//Global vs Function vs Block Scope :--
//  Variables defined by 'var' keyword have function scope if defined inside func and global scope if defined outside func.
//  Variables defined by 'let' and 'const' keyword have 'Global','Function' and 'Block' scopes.


//Lexical Scope :--
//  Every child func can access variables of the parent func. But no parent func can access vars of it child / grandchild funcs.
//  We say Inner Functions are Lexically bound by outer functions or child functions are lexically bound by the parent functions.

var x = 100;
function inner1(){
    x += 1;
    function inner2(){
        x += 1;
        console.log(x);
    }
    console.log(x)
    inner2();
}
console.log(x);
inner1()


//Closures :-- 
//  If you define a function with a variable inside it, as soon as the function is done executed, that variable will be deleted from memory.
//  JS has closures. These are combinations of functions and their lexical environments within which those functions are defined.
function mT(f){
    let p
    let q
    let prev
    console.log('p macha:',p);
    console.log('q macha:',q);
    console.log('prev macha:',prev);
    return function(x,y){
        if(x!=p && y!=q){
            console.log(p,q)
            p    = x;
            q    = y;
            prev = f(x,y);
            console.log('ran if')
            return prev;
        }
        else{
            console.log(p,q)
            console.log('ran else')
            return prev;
        }
    }
}

function g(x,y){
    return x+y;
}

const mtt = mT(g);
console.log(mtt(1,2));
console.log(mtt(1,2));

