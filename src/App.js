import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Layout/Header";
import Home from "./pages/Home";
import './css/style.css'
import Layout from "./Layout/Layout";

function App() {


  return (
    <div className="App">
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path='/' element={<Home></Home>} ></Route>
          </Routes>
        </Layout>
      </BrowserRouter>
    </div>
  );
}

export default App;
