import { useState } from 'react';
import './index.css';

function App() {
  const [result, setResult] = useState("");
  
  const handClick = (e) =>{
    setResult(result.concat(e.target.name));
  }
  const clear = () => {
    setResult("");
  }

  const backspace = () => {
    setResult(result.slice(0,result.length -1));

  }

  const calculate = () => {
    try {
      setResult(eval(result).toString());
    } catch(err) {
      setResult("Error")
    }
  }


  return (
    <>
      <div className="container">
        <form>
          <input type="text" value={result} />
        </form>
        <div className="keypad">
          <button className='highlight' onClick={clear} id='clear'>Clear</button>
          <button className='highlight' onClick={backspace} id='backspace'>C</button>
          <button className='highlight' name='/' onClick={handClick}>&divide;</button>
          <button name='7' onClick={handClick}>7</button>
          <button name='8' onClick={handClick}>8</button>
          <button name='9' onClick={handClick}>9</button>
          <button className='highlight' name='*' onClick={handClick}>&times;</button>
          <button name='4' onClick={handClick}>4</button>
          <button name='5' onClick={handClick}>5</button>
          <button name='6' onClick={handClick}>6</button>
          <button className='highlight' name='-' onClick={handClick}>&ndash;</button>
          <button name='1' onClick={handClick}>1</button>
          <button name='2' onClick={handClick}>2</button>
          <button name='3' onClick={handClick}>3</button>
          <button className='highlight' name='+' onClick={handClick}>+</button>
          <button name='0' onClick={handClick}>0</button>
          <button name='.' onClick={handClick}>.</button>
          <button className='highlight' onClick={calculate} id='result'>=</button>
        </div>
      </div>
    
    </>
  );
}

export default App;
