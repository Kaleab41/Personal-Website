import './App.css'
import Landing from './Pages/Landing'
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import Notes from './Pages/Notes'
import Blog from './Pages/Blogs'
function App() {

  return (
    <>
   <Router>
    <Routes>
      <Route path="/" element={<Landing />}/>
      <Route path="/notes" element={<Notes />}/>
      <Route path="/blog" element={<Blog />}/>
    </Routes>
   </Router>


    </>
  )
}

export default App
