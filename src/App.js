import logo from './logo.svg';
import './App.css';
import { RouterProvider } from 'react-router-dom';
import { route } from './Route/Route';

function App() {
  return (
    <div className="container">
      <RouterProvider router={route}></RouterProvider>
    </div>
  );
}

export default App;
