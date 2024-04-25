
import './App.css';
import logo from "./img/logo.svg"

function App() {
  let displayData=()=>{
    alert("Welcome to Ws")
  }// simple function
  let addData=(a,b)=>{
    console.log(a+b)
  }// parameterized function
  
  return (
    <div className="App">
      
      <img width={300} src= {logo} alt='' />
      <h1 className='text-[50px] text-blue-700 font-bold' >Welcome to WSCube</h1>
      <button className='bg-[red] p-[30px]' onClick={displayData}>Save</button>
      <button className='bg-[red] p-[30px] ' onClick={()=>addData(20,25)}>Add data</button>
    </div>
  );
}

export default App;
