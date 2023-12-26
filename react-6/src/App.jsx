import Counter from './Counter'
import './Counter.css'


function App () {
    return (
        <>
            <h1 className='header'>Counter App</h1>
            <p className='para'>Min : 0 |  Max : 20 |  Default : 7</p>
            <Counter/>
        </>
    )
}


export default App