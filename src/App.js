import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Layout from "./layout/Layout";
import Home from "./pages/Home";
import MyCart from "./pages/MyCart";
import Category from "./pages/Category";
import Product from "./pages/Product";
import Checkout from "./pages/Checkout";
import UserProvider from "./context/userProvider";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import SearchPanel from "./pages/SearchPanel"

function App() {

  return (
    <UserProvider>
      <BrowserRouter basename="/Frontend-final-4">
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/category" element={<Category />} />
            <Route path="/product" element={<Product />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/mycart" element={<MyCart />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/search-results/:query" element={<SearchPanel />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </UserProvider>
  );
}

export default App;
