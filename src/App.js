import './App.css';
import {ComplexNavbar} from './components/navbar.js';

function App() {
  return (
    <div className='App bg-[#EEEDEB] h-dvh'>
      <ComplexNavbar />
      <div className='mt-10 w-screen'>
        <h1 className='text-xl text-[#747264] font-semibold'>Hello World!</h1>
      </div>
    </div>
  );
}

export default App;
