//-- App ---//
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
// import Products from "./pages/Products";
// import Todo from "./components/Todo";
import Login from "./components/Login";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Home/>}/>
        {/* <Route path="/products" element={<Products/>}/> */}
        {/* <Route path="/todo" element={<Todo/>}/> */}
        {/* <Route path="/cart" element={<Products/>}/> */}
        {/* <Route path="/bill" element={<Bill/>}/> */}
        {/* <Route path="/productdetail" element={<Productdetail/>}/> */}
        <Route path="/" element={<Login/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
