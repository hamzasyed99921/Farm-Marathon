import './App.scss';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Base from './components/Layouts/Base';
import Details from './pages/Details';


function App() {
  return (
    <div className="App">
       <BrowserRouter>
      <Base>
        <Routes>
          <Route index path="/" element={<Home/>} />
          <Route  path="/details" element={<Details/>} />
          {/* <Route path="/*" element={<PageNotFound />}/> */}
        </Routes>
      </Base>
    </BrowserRouter>
    </div>
  );
}

export default App;
