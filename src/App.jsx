import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'
import Layout from './Components/Layout';
import Home from './Components/Home';
import About from './Components/About';
import Blogs from './Components/Blogs';
import BlogsDetails from './Components/BlogsDetails';
import PlacesRoutes from './Components/PlacesRoutes';
import Nopage from './Components/Nopage';

const App = () => {
  return(
   <BrowserRouter>
      <Routes>
        <Route path='/' element = {<Layout/>}>
         <Route index element = {<Home/>}/>
         <Route path='/about' element = {<About/>}/>
         <Route path='/blogs' element = {<Blogs/>}/>
         <Route path='/blogs/:id' element = {<BlogsDetails/>}/>
         <Route path='/places' element = {<PlacesRoutes/>}/>
         <Route path='*' element = {<Nopage/>}/>
        </Route>
      </Routes>
   </BrowserRouter>
  )
}

export default App;