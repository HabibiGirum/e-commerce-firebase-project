import { Route, BrowserRouter, Routes } from "react-router-dom";
import { AddProduct, Admin, Cart, Error, Home, Login, Product, Register } from "./pages";
function App() {
  return (
    <>
      {/* // this is router */}
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Login  />} />
          <Route path="/home" exact element={<Home/>} />
          <Route path="/register" exact element={<Register />} />
          <Route path="/product/:id" exact element={<Product />} />
          <Route path="/admin/createProduct/" exact element={<AddProduct/>} />
          <Route path="/cart/:id?" exact element={<Cart />} />
          <Route path="/admin" exact element={<Admin />} />

          <Route path="*" exact element={<Error />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
