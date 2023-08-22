
import './App.css';
import Input from './components/Input';
import Button from './components/Button';
import Card from './components/Card';
import Select from './components/Select';
import Table from './components/Table';


function App() {
  let selectCheck =(select)=>{
    
      if (select ='pakistan'){
        alert("Most welcome")
        select =""
       
    }
    else{
      alert("welcome")
    }
  }
  let inputText=(input)=>{
    console.log(input);
    
  }
  
let testing =()=>{
  alert('Thank you');
}
let users = [
  {
    id: 1,
    name: "ABC",
    age: 18,
    isActive: true,
  },
  {
    id: 2,
    name: "amin",
    age: 12,
    isActive: true,
  },
  {
    id: 3,
    name: "ahmed",
    age: 22,
    isActive: true,
  },
  {
    id: 4,
    name: "umer",
    age: 18,
    isActive: false,
  },
];
let data = [
  {
    id: 1,
    name: "ABC",
    age: 18,
   
  },
  {
    id: 2,
    name: "amin",
    age: 12,
    
  },
  {
    id: 3,
    name: "ahmed",
    age: 22,
   
  },
  {
    id: 4,
    name: "umer",
    age: 18,
 
  }];


  return (
  <div className='main-container'>
    <Input  inputVal={inputText}/>
    <Button  buttonvalue={'Click Here'} buttonClick={testing}/>
       {users.map((x, i) => {
          return (
            <Card id={x.id} name={x.name} key={i} age={x.age} isActive={x.isActive} />
          );
        })}
    <Select seleted={selectCheck}/>
    {data.map((x, i) => {
          return (
            <Table id={x.id} name={x.name} key={i} age={x.age}  />
          );
        })}
   
 
  </div>

  )
}

export default App;
