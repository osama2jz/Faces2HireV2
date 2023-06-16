import { Route, Routes } from "react-router-dom";
import routeNames from "./routes";
import "./App.css";
import GeneralLayout from "./layout/GeneralLayout";
import Home from "./Pages/General/Home";

function App() {
  return (
    <>
      <Routes>
        <Route path={routeNames.general.landing} element={<GeneralLayout />}>
          <Route path={routeNames.general.landing} element={<Home />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
