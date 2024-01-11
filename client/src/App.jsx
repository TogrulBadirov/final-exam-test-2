import { HelmetProvider } from "react-helmet-async";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";
import MainLayout from "./layout/MainLayout";
import AddPage from "./pages/AddPage";
import Home from "./pages/Home";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import DetailPage from "./pages/DetailPage";
import WishlistPage from "./pages/WishlistPage";
function App() {
  return (
    <>
      <HelmetProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<MainLayout />}>
              <Route index element={<Home />} />
              <Route path="/add-page" element={<AddPage />} />
              <Route path="/product-detail/:id" element={<DetailPage />} />
              <Route path="/wishlist" element={<WishlistPage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </HelmetProvider>
    </>
  );
}

export default App;
