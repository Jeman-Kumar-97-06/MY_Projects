import './styles/App.css';
// import Button from '@mui/material/Button';
const handleNums = (e) => {
  let clickedNum = e.target.value;
}
const handleOps = (e) => {
  let op = e.target.innerText
} 
function App() {
  return (
    <div className="App">
      <div className="calculator">
        <input  className='inpt' type="text" />
        <button className='ac'>AC</button>
        <button className='brc'>()</button>
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
        <button className='back'><span className="material-symbols-outlined">backspace</span></button>
        <button className='eql'>= </button>
      </div>
    </div>
  );
}

export default App;
