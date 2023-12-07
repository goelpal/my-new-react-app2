import logo from './logo.svg';
import './App.css';
import Comp1 from './components/Comp1';
//import data from './components/Data.js';
import data from './components/Data.json';
/*
const data = [{
  firstName : "John",
  lastName : "Doe",
  id: 1
 },
{
    firstName : "Johan",
    lastName : "Doe",
    id: 2
},
{
  firstName : "Sara",
  lastName : "Doe",
  id: 3
}];
*/

const allData = (values) =>{
  return(
    <>
      <Comp1 
        firstName={values.firstName}
        lastName={values.lastName}
        id={values.id}
      />
    </>
  )
}

//console.log(data[1].firstName);


function App() {
 return(
  <div className="App">
    <h1>Props</h1>
    {/*<Comp1
    firstName = {data.firstName}
    lastName = {data.lastName}
    id={data.id}
 />*/}
 {/*<Comp1 {...data}></Comp1>
  </div>*/}
  {data.map(allData)}
  </div>
 )
}

export default App;
