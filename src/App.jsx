// src/App.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import { Header } from "./components/header";
import { Footer } from "./components/footer";
import { AddBookForm } from "./components/addBookUI";
import { BookTable } from "./components/displayBooks";
import { ToastContainer } from "react-toastify";

import "./App.css";

function App() {
  return (
    <div className="App layout">
      <Header />
      <ToastContainer position="top-right" autoClose={5000} hideProgressBar />
      <main className="content">
        <Routes>
          <Route path="/addBookUI" element={<AddBookForm />} />
          <Route path="/libraryList" element={<BookTable />} />
          <Route
            path="/contactInfo"
            element={
              <h2 className="mt-4 text-center">📞 Contact Info Coming Soon</h2>
            }
          />
          <Route path="*" element={<AddBookForm />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;
