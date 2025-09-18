import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router";
import { Provider } from "react-redux";
import store from "./Stores/store";

import Patients from "./pages/Patients";
import Home from "./pages/Home";
import About from "./pages/About";
import Navbar from "./components/Navbar"; 

function App() {
  return (
    <Provider store={store}>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <main className="container mx-auto px-4 py-6">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/patients" element={<Patients />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>
      </div>
    </Provider>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
    <App />
  </Router>
);
