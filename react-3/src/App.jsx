import Student from "./Student/Student";

function App() {

  return (
    <div>
        <Student name='shivu' age={19} />
        <Student name='anshu'  isMarried={true}/>
        <Student age={19} isMarried={false}/>
    </div>
  ); 
}

export default App