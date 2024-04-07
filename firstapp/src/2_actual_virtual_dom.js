import ReactDOM from 'react-dom/client';

const root1 = document.getElementById('root1');
const root2 = ReactDOM.createRoot(document.getElementById('root2'));

setInterval(()=>{
    root1.innerHTML = `
        <div>
            <h1>THis is actual dom</h1>
            <input type="text" name="" id="">
            <h1>${new Date().toLocaleTimeString()}</h1>
        </div>
    `

    root2.render( 
        <div>
            <h1>THis is Virtual dom</h1>
            <input type="text" name="" id=""/>
            <h1>{new Date().toLocaleTimeString()}</h1>
        </div>
    )
    
},1000)