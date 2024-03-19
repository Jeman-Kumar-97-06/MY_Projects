/*
Queue :-- A List Like Datastructure with FIFO mechanism.
New elements are inserted at the end of the list.
Elements are removes from the front ie., from index 0 of the list.
*/

//Enqueue :-- Adding an element at the end
class Queue{
    constructor(){
        this.dataStore = [];
    }

    enqueue(element){
        this.dataStore.push(element);
    }

    dequeue(){
        this.dataStore.shift();
    }

    front(){
        return this.dataStore[0];
    }

    back(){
        return this.dataStore[this.dataStore.length - 1]
    }

    toString(){
        var retStr = '';
        for(var i = 0; i<this.dataStore.length;++i){
            retStr += this.dataStore[i]+'\n';
        }
        return retStr
    }
    empty(){
        if(this.dataStore.length==0){
            return true;
        }
        else{
            return false;
        }
    }
}