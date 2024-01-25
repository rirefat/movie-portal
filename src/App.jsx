import './App.css'
import { useState } from "react";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import MovieList from "./components/MovieList/MovieList";
import Sidebar from "./components/Sidebar/Sidebar";
import { CartContext, ThemeContext } from "./utilities/contexts";

import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  const [cart, setCart] = useState([]);
  const [dark, setDark] = useState(false);
  return (
    <CartContext.Provider value={[cart, setCart]}>
      <ThemeContext.Provider value={[dark, setDark]}>
        <div className={`w-full h-full ${dark && 'dark'}`}>
          <Header />
          <main className="container grid lg:grid-cols-[218px_1fr] gap-[3.5rem]">
            <Sidebar />
            <MovieList />
          </main>
          <Footer />
        </div>
        <ToastContainer />
      </ThemeContext.Provider>
    </CartContext.Provider>
  );
};

export default App;