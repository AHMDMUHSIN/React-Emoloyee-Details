
import './App.css'
import Navbar from './components/navbar/Navbar'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './components/body/home/Home'
import Edit from './components/body/edit/edit'
import Register from './components/body/register/Register' 
import View from './components/body/View/View'

function App() {
  

  return (
    <>
     <BrowserRouter>
     <Navbar/>
     <Routes>
      
      <Route path='/' Component={Home}/>
      <Route path='/edit/:id' Component={Edit}/>
      <Route path='/register' Component={Register}/>
      <Route path='/view/:id' Component={View}/>

     </Routes>
     
     </BrowserRouter>

     
    </>
  )
}

export default App
