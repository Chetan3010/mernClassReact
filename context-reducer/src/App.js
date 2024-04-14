import './App.css';
import { CiDark } from "react-icons/ci";
import { CiLight } from "react-icons/ci";
import { useTheme  } from './hook/useTheme';

function App() {
  const { theme, setTheme } = useTheme()
  let themeStyle = {}
  if (theme === 'light') themeStyle = { background: "white", color: "black" } 
  else themeStyle = { background: "black", color: "white" }

  return (
    <div className="App w-full h-screen flex justify-between p-20" style={themeStyle}>
      <h1 className='text-8xl '>
        Hey there 👋
      </h1>
      <div className=''>
        {theme === 'light' ? 
          <CiDark className='w-24 h-24 text-black cursor-pointer hover:scale-110' onClick={ () => setTheme('dark')} /> : 
          <CiLight className='w-24 h-24 text-white cursor-pointer hover:scale-110' onClick={ () => setTheme('light')} />}
      </div>
    </div>
  );
}

export default App;
