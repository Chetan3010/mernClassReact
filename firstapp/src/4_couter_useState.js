import { useState } from 'react';
import ReactDOM from 'react-dom/client';



function Button(){
    let [counter, setCounter] = useState(0)
    // let upCounter = () => {
    //     setCounter(counter+1)
    // }
    return  <>
                <p>Counter is : {counter}</p>
                <button onClick={() => setCounter((count)=> count+1)}>+1</button>
            </>
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<Button/>)