import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./components/Homepage";
import NotFound from "./components/NotFound";
import { ContextStore } from "./store/ContextStore";
import { useState } from "react";

function App() {
  const [weatherApi, setWeatherApi] = useState({});

  return (
    <>
      <ContextStore.Provider value={{ weatherApi, setWeatherApi }}>
        <Router>
          <Routes>
            <Route path="/" element={<Homepage />}></Route>
            <Route path="*" element={<NotFound />}></Route>
          </Routes>
        </Router>
      </ContextStore.Provider>
    </>
  );
}

export default App;
