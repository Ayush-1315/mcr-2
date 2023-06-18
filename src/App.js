import './App.css';
import {Routes,Route} from "react-router-dom";
import { Home } from './Pages/Home/home';
import { ArchivePage } from './Pages/Archive/archive';
import { Navbar } from './Components/Navbar/navbar';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/archive" element={<ArchivePage/>}/>
      </Routes>
    </div>
  );
}

export default App;
