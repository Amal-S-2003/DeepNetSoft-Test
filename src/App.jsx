import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import AddMenu from "./pages/AddMenu";
import Additem from "./pages/Additem";


function App() {
  return (
    <>
      <h1 class="text-3xl font-bold underline">Hello world!</h1>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/add-menu" element={<AddMenu/>}/>
        <Route path="/add-item" element={<Additem/>}/>

      </Routes>
    </>
  );
}

export default App;
