import './App.css';
import { CiDark } from "react-icons/ci";
import { CiLight } from "react-icons/ci";
import { CiSquarePlus } from "react-icons/ci";
import { CiSquareMinus } from "react-icons/ci";

import { useTheme } from './hook/useTheme';
import { useDispatch, useSelector } from 'react-redux';
import { incremented, decremented } from './counterSlice';

function App() {
  const { theme, updateTheme } = useTheme()
  let themeStyle = {}
  if (theme === 'light') themeStyle = { background: "white", color: "black" }
  else themeStyle = { background: "black", color: "white" }
  const counter = useSelector(state => state.counter.value)
  const dispatch = useDispatch()
  return (
    <div className="App w-full h-screen p-20" style={themeStyle}>
      <div className=' flex justify-between'>
        <h1 className='text-8xl selection:bg-none'>
          Hey there 👋
        </h1>
        <div className=''>
          {theme === 'light'
            ? <CiDark className='w-24 h-24 cursor-pointer hover:scale-110' onClick={() => updateTheme('dark')} />
            : <CiLight className='w-24 h-24 cursor-pointer hover:scale-110' onClick={() => updateTheme('light')} />
          }
        </div>
      </div>
      <div className='mt-20'>
        <div className="flex justify-between">
          <h1 className='text-8xl selection:bg-none'>
            Count =&gt; {counter} 👀
          </h1>
          <div className='flex'>
            <CiSquarePlus className='w-24 h-24 cursor-pointer hover:scale-110' onClick={() => dispatch(incremented())} />
            <CiSquareMinus className='w-24 h-24 cursor-pointer hover:scale-110' onClick={() => dispatch(decremented())} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
