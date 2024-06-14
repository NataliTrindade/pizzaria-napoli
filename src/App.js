import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/Home";
import MenuPage from "./pages/Menu";
import CartPage from "./pages/Cart";
import LoginPage from "./pages/Login";
import NotFoundPage from "./pages/NotFound";
import Layout from "./components/Layout";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="menu" element={<MenuPage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="cart" element={<CartPage />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
