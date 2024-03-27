/* Stacks follow LIFO Method*/
// Ex:-- Stack of Books, Browser History...
// Functions in Stacks :-- push   :-- add element on to a stack.
//                         pop    :-- removing the top element of stack.
//                         peek   :-- displaying the top element of the stack.
//                         length :-- determine elements on the stack.

// Using Array as a stack :--

var letters = []; // This is the stack.
var word    = "racecar";
var rword   = "";

//put letters of word into stack
for(var i = 0; i< word.length; i++) {
    letters.push(word[i]);
}
//pop off the stack in reverse order
for(var i = 0; i<word.length;i++) {
    rword += letters.pop();
}

if(rword === word) {
    console.log(word + " is a palindrome.");
}

else {
    console.log("its not a palindrome")
}


