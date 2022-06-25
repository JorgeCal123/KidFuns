import * as React from "react";
import { Routes, Route } from "react-router-dom";
import { Home } from "./page/Home";
import { LevelKids } from "./page/LevelKids";
import { Register } from './page/Register'
import { Registerkids } from "./page/RegisterKids";
import { Userkids } from "./page/UserKids";
import { LoginKids } from './page/Loginkids/Loginkids'

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<Home />} exact />
            </Routes>
            <Routes>
                <Route path="/Register" element={<Register />} exact />
            </Routes>
            <Routes>
                <Route path="/Registerkids" element={<Registerkids />} exact />
            </Routes>
            <Routes>
                <Route path="/Userkids" element={<Userkids />} exact />
            </Routes>
            <Routes>
                <Route path="/Levelkids" element={<LevelKids />} exact />
            </Routes>
            <Routes>
                <Route path="/loginkids" element={<LoginKids />} exact />
            </Routes>
        </div>
    );
}

export default App;
