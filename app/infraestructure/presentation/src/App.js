import * as React from "react";
import { Routes, Route } from "react-router-dom";
import { Home } from "./page/Home/Home";
import { LevelKids } from "./page/Levelkids/LevelKids";
import { Register } from './page/Register/Register'
import { Registerkids } from "./page/Registerkids/RegisterKids";
import { Userkids } from "./page/Userkids/UserKids";
import { LoginKids } from './page/Loginkids/Loginkids'

function App() {
    return (
        <div className="App">
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
                <Route path="/userkids" element={<Userkids />} exact />
            </Routes>
            <Routes>
                <Route path="/levelkids" element={<LevelKids />} exact />
            </Routes>
            <Routes>
                <Route path="/loginkids" element={<LoginKids />} exact />
            </Routes>
        </div>
    );
}

export default App;
