import logo from './logo.svg';
import './App.css';
import { RouterProvider } from 'react-router-dom';
import { route } from './Route/Route';
import { useContext } from 'react';
import { modeContext } from './Context/ModeContext';

function App() {
  const { mode } = useContext(modeContext)
  return (
    <div className={mode ? 'backgrond' : ''}>
      <RouterProvider router={route}></RouterProvider>
    </div>
  );
}

export default App;
