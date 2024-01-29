import { BrowserRouter,Routes,Route } from 'react-router-dom'
import './App.css'
import Home from './Home'
import Create from './Create'
import Read from './Read'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/create' element={<Create/>}/>
          <Route path='/read/:id' element={<Read/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
