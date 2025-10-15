import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Home'
import Add from './Add'
import Edit from './Edit'
import View from './View'

function App() {
  

  return (
    <>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/add' element={<Add/>}/>
      <Route path='/edit' element={<Edit/>}/>
      
     </Routes>

    </>
  )
}

export default App
