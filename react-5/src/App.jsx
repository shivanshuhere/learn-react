import List from "./List";

function App() {
  //  WORK ----- we can validate if the array is empty or not supplied to the list component
  const fruits = [
    {id : 1, name :'apple', calories : 120},
    {id : 2, name :'oragne', calories : 20},
    {id : 3, name :'banana', calories : 12},
    {id : 4, name :'mango', calories : 40},
    {id : 5, name :'cherry', calories : 56}]

    const vegitabels = [
      {id : 10, name :'tomato', calories : 50},
      {id : 20, name :'potato', calories : 90},
      {id : 30, name :'lady finger', calories : 92},
      {id : 40, name :'carrots', calories : 20},
      {id : 50, name :'onion', calories : 56}]

  return (
    <div>
      {fruits.length > 0 && <List items = {fruits} category = 'Fruits'/> }
      {fruits.length > 0 &&  <List items = {vegitabels} category = 'Vegitabels'/>}
      {fruits.length > 0 && <List items = {fruits} /> }
      {fruits.length > 0 &&  <List items = {vegitabels} category = 'Vegitabels'/>}
      
    </div>
  ); 
}

export default App