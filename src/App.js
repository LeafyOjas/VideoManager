import './App.css';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { Home } from './components/Home';
import {Videos} from './components/Videos'
import { Bucket } from './components/Bucket';
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Home/>}>
      <Route path="/:category" element={<Videos/>}/>
      <Route path="/bucket" element={<Bucket/>}/>
    </Route>,
    
  )
);

function App() {
  
  return (
    <RouterProvider router={router} />
  );
}

export default App;
