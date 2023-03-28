import './App.css';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { Home } from './components/Home';
import {Videos} from './components/Videos'
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Home/>}>
      <Route path="/:category" element={<Videos/>}/>
    </Route>,
    
  )
);

function App() {
  
  return (
    <RouterProvider router={router} />
  );
}

export default App;
