import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Home from './pages/Home.js';
import Description from './pages/viewDescription.js'
const App = () => {
  // -------------------------------------------------
 return(
   <Router>
   <Routes>
     <Route extact path="/" element={<Home/>} />
     <Route path="/description/:productId" element={<Description/>} />
   </Routes>
   </Router>
 )
}

export default App
