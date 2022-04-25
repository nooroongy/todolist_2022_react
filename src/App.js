import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Layout/Header";
import Home from "./pages/Home";

function App() {


  return (
    <div className="App">
      <BrowserRouter>
        <Header></Header>
        <Routes>
          <Route path='/' element={<Home></Home>} ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
