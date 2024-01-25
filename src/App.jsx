import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import MovieList from "./components/MovieList/MovieList";
import Sidebar from "./components/Sidebar/Sidebar";

const App = () => {
  return (
    <>
      <Header />
      <main className="container grid lg:grid-cols-[218px_1fr] gap-[3.5rem]">
        <Sidebar />
        <MovieList/>
      </main>
      <Footer />
    </>
  );
};

export default App;