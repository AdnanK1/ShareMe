import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { PageLayout } from "./layout/PageLayout";
import { Login } from "./pages/Login";
import { Home } from "./pages/Home";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="login" element={<Login />} />
        <Route path="/" element={<PageLayout />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
