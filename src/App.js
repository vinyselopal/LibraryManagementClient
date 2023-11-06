import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import AddBooks from "./pages/AddBooks";
import SearchBooks from "./pages/SearchBooks";
import Layout from "./pages/Layout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="search_books" element={<SearchBooks />} />
          <Route path="add_books" element={<AddBooks />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
