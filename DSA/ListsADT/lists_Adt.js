class List{
    constructor(){
      this.listSize = 0;
      this.pos = 0;
      this.dataStore = [];

      //find function used again later
      this.find = (element)=>{
        for (var i=0;i<this.dataStore.length;i++){
        if(this.dataStore[i]==element){
          return i;
        }
      }
      return -1;
      }
    }
    
    //append method
    append(element){
      this.dataStore[this.listSize++] = element;
      console.log(`added ${element} to this list`)
    }
    
    //remove method
    remove(element){
      var foundAt = this.find(element);
      if(foundAt > -1){
        this.dataStore.splice(foundAt,1);
        --this.listSize;
        return true;
      }
      return false;
    }
    
    //insert method to insert element at a position
    insert(element,after){
      var insertPos = this.find(after);
      if(insertPos > -1){
        this.dataStore.splice(inserPos+1,0,element);
        ++this.listSize;
        return true;
      }
      return false;
    }
    
    //length of the datastore
    length(){
      console.log(this.listSize);
      return
    }
    
    //print the list in string format
    toString(){
      return this.dataStore.join(",");
    }
    
    //clear and delete all data from list
    clear(){
      delete this.dataStore;
      this.dataStore = [];
      this.listSize = this.pos = 0;
    }
    
    //see if an element exists in the list
    contains(element){
      for(var i=0;i<this.dataStore.length;i++){
        if(dataStore[i]==element){
          return true;
        }
      }
      return false;
    }
    
    //go to the front of the list
    front(){
      this.pos = 0;
    }
    
    //go to the end of the list
    end(){
      this.pos = this.listSize-1;
    }
    
    //go to the previous position from the current position
    prev(){
      if(this.pos >0){
      this.pos -= 1;
      }
    }
    
    //next postion.
    next(){
      if(this.pos < this.listSize -1 ){
        this.pos += 1;
      }
    }

    //current position.
    currPos(){
      return this.pos;
    }
    
    //go to a certain position
    moveTo(position){
      this.pos = position;
    }
    
    //get element at the current position.
    getElement(){
      return this.dataStore[this.pos];
    }
    
  }
  
  var x = new List(10,0)
  x.append(5)
  x.append(6)
  x.append(7)
  console.log(x.dataStore)
  console.log(x.listSize)
  console.log(x.toString())
  x.remove(5)
  console.log(x.dataStore)