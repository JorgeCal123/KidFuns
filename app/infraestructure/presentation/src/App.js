import * as React from "react";
import { Routes, Route } from "react-router-dom";
import { Home } from "./page/Home/Home";
import { LevelKids } from "./page/Levelkids/LevelKids";
import { Register } from './page/Register/Register'
import { Registerkids } from "./page/Registerkids/RegisterKids";
import { LoginKids } from './page/Loginkids/Loginkids'
import { Level } from "./page/Level/MainLevel";
import { Result } from "./page/Result/Result";
import { Table } from './page/tablas/tablaexersice'

import './styles_main.css'
function App() {
    return (
        <body className="App">
            <Routes>
                <Route path="/" element={<Home />} exact />
            </Routes>
            <Routes>
                <Route path="/register" element={<Register />} exact />
            </Routes>
            <Routes>
                <Route path="/registerkids" element={<Registerkids />} exact />
            </Routes>
            <Routes>
                <Route path="/levelkids" element={<LevelKids />} exact />
            </Routes>
            <Routes>
                <Route path="/loginkids" element={<LoginKids />} exact />
            </Routes>
            <Routes>
                <Route path="/levelexcercice" element={<Level />} exact />
            </Routes>
            <Routes>
                <Route path="/result" element={<Result />} exact />
            </Routes>
            <Routes>
                <Route path="/tabla" element={<Table />} exact />
            </Routes>
        </body>
    );
}

export default App;
