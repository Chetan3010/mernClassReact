import ReactDOM from 'react-dom/client';

const generate_random = () => {
    console.log(Math.random());
}

function Button(){
    return <button onClick={generate_random}>Click me to get random number</button>
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<Button/>)