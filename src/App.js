import {useState} from 'react';
import './App.css';



function App() {

  const [Weight, setWeight] = useState(0);
  const [Bottles, setBottles] = useState(0);
  const [Time, setTime] = useState(0);
  const [Gender, setGender] = useState('male');
  const [Result, setResult] = useState(0);

  function handleSubmit(e) {
   e.preventDefault();

   let promille = 0;
   let litres = Bottles * 0.33;
   let grams = (litres * 8 * 4.5);
   let burning = Weight / 10;
   

   if (Gender === 'male') {
   
      promille = (grams - (burning * Time))  / (Weight * 0.7);

    }

    else {
      promille = (grams - (burning * Time))  / (Weight * 0.6);

    }
    setResult(promille);



  }
  
  
  

  


  return (
    <>
    <h1> Calculating alcohol blood level</h1>
    <form onSubmit={handleSubmit}>
      <div>
        <label> Weight333 </label>
        <input name='weight' type="number" step="1" value={Weight} onChange={e => setWeight(e.target.value) } />
      </div>
      <div>
        <label> Bottles </label>
        <input name="Bottles" type="number" step="1" value={Bottles} onChange={e => setBottles(e.target.value)} />

      </div>

      <div>
        <label> Time </label>
         <input name="Time" type="number" step="1" value={Time} onChange={e => setTime(e.target.value)} />

      </div>
      <div>
         <label> Gender </label>
         <input type="radio" name="Gender" value="male" defaultChecked onChange={e => setGender(e.target.value)}/><label>Male</label>
         <input type="radio" name='Gender' value="female" onChange={e => setGender(e.target.value)} /><label>Female</label>

      </div>
      <div>
        <output>{Result.toFixed(2)}</output>

      </div>
      <button> Calculate </button>



    </form>
    
    </>
  );
}

export default App;
