import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { DatePicker } from 'antd';
import Products from "./pages/Products";
import HomePage from "./pages/HomePage";


function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/products' element={<Products />} />
          {/* <Route path='/about' element={<About />} /> */}
          {/* <Route path='/about' element={<Contact />} /> */}
        </Routes>
      </Router>
    </>
  )
}

export default App
