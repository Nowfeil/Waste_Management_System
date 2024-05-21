import './App.css';
import Footer from './components/Footer';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Signup from './components/Signup';
import Login from './components/Login';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
function App() {
  const router = createBrowserRouter([
    {
      path:'/',
      element:<><Navbar/><Home/><Footer/></>,
    },
    {
      path:'/signup',
      element:<><Navbar/><Signup/><Footer/></>
    },
    {
      path:'/login',
      element:<><Navbar/><Login/><Footer/></>
    }
  ])
  return (
    <>
    <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;
