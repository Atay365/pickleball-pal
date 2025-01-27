import { useState } from "react";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Signup from "./pages/Signup/Signup";
import Profile from "./pages/Profile/Profile";
import FindCourt from "./pages/FindCourt/FindCourt";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Score from "./pages/Score/Score";
import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <div id="root">
          <Header />
          <div className="site-body">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/courts" element={<FindCourt />} />
              <Route path="/game" element={<Score />} />
            </Routes>
            <Footer />
          </div>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
