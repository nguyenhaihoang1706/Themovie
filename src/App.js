import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/pages/Home";
import MoiveList from "./components/MovieList";
function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route index element={<Home />}></Route>
          <Route path="movie/:id" element={<h1>Movie detail pages</h1>}></Route>
          <Route path="movies/:type" element={<MoiveList />}></Route>
          <Route path="/*" element={<h1>Error pages</h1>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
