import './styles/App.css';
import {useState} from 'react';

//What to do when a number is clicked:
const handleNums = (e) => {
  let clickedNum = e.target.value;
  document.querySelector('.inpt').value+=clickedNum
}

//what to do when an operator is clicked:
const handleOps = (e) => {
  if(document.querySelector('.inpt').value.length === 0){
    return;
  }
  let op = e.target.innerText
  if(op==='AC'){
    document.querySelector('.inpt').value=''
    return
  }
  document.querySelector('.inpt').value+=op
} 

//what to do when equal is clicked:
const handleEq = () => {
  if(document.querySelector('.inpt').value.length===0){
    document.querySelector('.inpt').value='No Valid Expression to Evaluate!'
  }
  else 
  {
  const inptval = document.querySelector('.inpt').value;
  const inpval0 = inptval.replace(/X/g,'*');
  const inpval2 = inpval0.replace(/%/g,'*0.01*')
  if(inpval2[inpval2.length-1]==='('){
    return
  }
  const res     = eval(inpval2);
  document.querySelector('.inpt').value=res}
}

//what to do when delete button is pressed:
const handleX = () => {
  let inptval = document.querySelector('.inpt');
  let x = inptval.value.split('');
  x.pop();
  inptval.value = x.join('');
  return;
}

function App() {
  const [brac,setBrac] = useState('(');

  //what to do when bracket is clicked:
  const handleBrac = () =>{
    let inptval = document.querySelector('.inpt');
    //when to add '(' to inpt:
        //if the end of inpt is an operator
    if((brac==='(') && (['/','X','+','-',undefined].includes(inptval.value[inptval.value.length-1])))
    {
     console.log('ran this')
     inptval.value += '(' 
     setBrac(')')
    }
    //when to add ')' to inpt:
      // if the end of the inpt is not an operator
      // if the end of the inpt
    else if ((brac===')')&& (['1','2','3','4','5','6','7','8','9','0'].includes(inptval.value[inptval.value.length-1]))){
      console.log('ran 2')
      inptval.value+=')'
      setBrac('(')
    }
  }
  return (
    <div className="App">
      <div className="calculator">
        <input  className='inpt' type="text" />
        <button className='ac' onClick={handleOps}>AC</button>
        <button className='brc' onClick={handleBrac}>( )</button>
        <button className='per' onClick={handleOps}>% </button>
        <button className='divd' onClick={handleOps}>/ </button>
        <button className='num7' value='7' onClick={handleNums}>7 </button>
        <button className='num8' value='8' onClick={handleNums}>8 </button>
        <button className='num9' value='9' onClick={handleNums}>9 </button>
        <button className='mult' onClick={handleOps}>X </button>
        <button className='num4' value='4' onClick={handleNums}>4 </button>
        <button className='num5' value='5' onClick={handleNums}>5 </button>
        <button className='num6' value='6' onClick={handleNums}>6 </button>
        <button className='subt' onClick={handleOps}>- </button>
        <button className='num1' value='1' onClick={handleNums}>1 </button>
        <button className='num2' value='2' onClick={handleNums}>2 </button>
        <button className='num3' value='3' onClick={handleNums}>3 </button>
        <button className='add' onClick={handleOps}>+ </button>
        <button className='num0' value='0' onClick={handleNums}>0 </button>
        <button className='deci'>. </button>
        <button className='back' onClick={handleX}><span className="material-symbols-outlined">backspace</span></button>
        <button className='eql' onClick={handleEq}>= </button>
      </div>
    </div>
  );
}

export default App;
