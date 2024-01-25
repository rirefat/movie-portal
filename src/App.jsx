import { useState } from "react";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import MovieList from "./components/MovieList/MovieList";
import Sidebar from "./components/Sidebar/Sidebar";
import { CartContext } from "./utilities/contexts";

const App = () => {
  const [cart, setCart]=useState([])
  return (
    <CartContext.Provider value={[cart, setCart]}>
      <Header />
      <main className="container grid lg:grid-cols-[218px_1fr] gap-[3.5rem]">
        <Sidebar />
        <MovieList/>
      </main>
      <Footer />
    </CartContext.Provider>
  );
};

export default App;