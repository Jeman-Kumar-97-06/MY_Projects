//Stack :-- An efficient/fast list like datastructure to which elements can be added or removed only from the top.
//A stack is a list of elements that are accessible only from one end of the list. This end is called 'Top'.
//Stack is a LIFO DS.
//Due to LIFO structure, any element that is not on top can't be acessed.
//To access the last element, you have to remove all the elements above it.
//Elements are removed/added using pop/push
//Element on the top is viewed without removing with the method 'peek()'.
class Stack{
    constructor(){
        this.dataStore = [];
        this.top       = 0;
    }
    //adds to the top ie., after the last index.
    push(element){
        this.dataStore[this.top++] = element;
    }
    
    //returns the last element without removing it.
    peek(){
        return this.dataStore[this.top-1];
    }
    //clear function
    clear(){
        delete this.dataStore;
        this.dataStore = [];
        this.top = 0;
    }

    len(){
        return this.top;
    }
    //returns the last element ie., the last indexed and removes it.
    pop(){
        this.dataStore.splice(this.top-1,1);
        return this.dataStore[--this.top];
    }
}

var x = new Stack();
x.push(1)
x.push(2)
x.push(3)
x.push(4)
console.log(x.dataStore)
console.log(x.pop())
console.log(x.top)
console.log(x.dataStore)