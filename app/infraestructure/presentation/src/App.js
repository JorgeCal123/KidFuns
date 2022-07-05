import * as React from "react";
import { Routes, Route } from "react-router-dom";
import { Home } from "./page/Home/Home";
import { LevelKids } from "./page/Levelkids/LevelKids";
import { Register } from './page/Register/Register_user';
import { Registerkids } from "./page/Registerkids/Register_Kids";
import { LoginKids } from './page/Loginkids/Loginkids'
import { Level } from "./page/Level/MainLevel";
import { Result } from "./page/Result/Result";
import { Table } from './page/tablas/tablaexersice'

import { Page404 } from "./page/Page404/Page404.jsx";

import './styles_main.css'
function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<Home />} exact />
                <Route path="/register" element={<Register />} exact />
                <Route path="/registerkids" element={<Registerkids />} exact />
                <Route path="/levelkids" element={<LevelKids />} exact />
                <Route path="/loginkids" element={<LoginKids />} exact />
                <Route path="/levelexcercice" element={<Level />} exact />
                <Route path="/result" element={<Result />} exact />
                <Route path="/tabla" element={<Table />} exact />
                <Route path="*" element={<Page404 />}/>
            </Routes>
        </div>
    );
}

export default App;