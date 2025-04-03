import "./App.css";
import Layout from "./components/Layout/Layout";
import Properties from "./pages/Properties/Properties";
import Website from "./pages/Website";
import { Suspense } from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
    <Suspense fallback={<div>Loading.....</div>}>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={< Website />} />
          <Route path="/properties" element={< Properties />} />


        </Route>
      </Routes>
    </Suspense>
    </BrowserRouter>
  );
}

export default App;
