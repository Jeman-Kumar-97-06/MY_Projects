import './styles/App.css';
// import Button from '@mui/material/Button';
function App() {
  return (
    <div className="App">
      <div className="calculator">
        <input type="text" />
        <button className='ac'>AC</button>
        <button className='brc'>()</button>
        <button className='per'>% </button>
        <button className='divd'>/ </button>
        <button className='num7'>7 </button>
        <button className='num8'>8 </button>
        <button className='num9'>9 </button>
        <button className='mult'>X </button>
        <button className='num4'>4 </button>
        <button className='num5'>5 </button>
        <button className='num6'>6 </button>
        <button className='subt'>- </button>
        <button className='num1'>1 </button>
        <button className='num2'>2 </button>
        <button className='num3'>3 </button>
        <button className='add'>+ </button>
        <button className='num0'>0 </button>
        <button className='deci'>. </button>
        <button className='back'><span class="material-symbols-outlined">backspace</span></button>
        <button classname='eql'>= </button>
      </div>
    </div>
  );
}

export default App;
