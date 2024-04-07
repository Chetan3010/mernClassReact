import ReactDOM from 'react-dom/client';

const root = ReactDOM.createRoot(document.getElementById('root'));

let my_name = "Chetan"
function Display(){
  return <h1>Hello {my_name}! How are you?</h1>
}

root.render(<Display/>);