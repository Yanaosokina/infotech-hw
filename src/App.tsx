import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Header } from "components/Header";
import { MainPage } from "components/MainPage";
import { StaffPage } from "components/StaffPage";
import { Footer } from "components/Footer";
import { ProductPage } from "components/ProductPage";

function App() {
  return (
    <div className="wrapper">
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/staff" element={<StaffPage />} />
        <Route path="/product/:id" element={<ProductPage  />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
