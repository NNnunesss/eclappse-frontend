import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import Sobre from "../pages/Sobre";
import Login from "../pages/Login";
import Cadastro from "../pages/Cadastro";
import Detalhes from "../pages/Detalhes";

function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/sobre" element={<Sobre />} />
                <Route path="/login" element={<Login />} />
                <Route path="/cadastro" element={<Cadastro />} />
                <Route path="/pessoa/:id" element={<Detalhes />} />
            </Routes>
        </BrowserRouter>
    );
}

export default AppRoutes;