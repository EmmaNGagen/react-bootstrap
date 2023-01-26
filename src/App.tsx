import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Layouts } from './components/Layouts';
import { Home } from './components/pages/Home';
import { About } from './components/pages/About';
import { Contact } from './components/pages/Contact';
import { Work } from './components/pages/Work';


function App(){
  return(
<BrowserRouter>
<Routes>
<Route path="/" element={<Layouts />}>
<Route index element={<Home />}></Route>
    <Route path="/about" element={<About/>}></Route>
    <Route path="/contact" element={<Contact />}></Route>
    <Route path="/work" element={<Work />}></Route>
  </Route>
</Routes>
</BrowserRouter>
  )
}

export default App;
