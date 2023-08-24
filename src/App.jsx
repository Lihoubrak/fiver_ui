import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { publicRoutes } from "./Routes";
import DefaultLayot from "./Layout";

function App() {
  return (
    <Router>
      <Routes>
        {publicRoutes.map((route, index) => {
          const Comp = route.component;
          return (
            <Route
              path={route.path}
              element={
                <DefaultLayot>
                  <Comp />
                </DefaultLayot>
              }
              key={index}
            />
          );
        })}
      </Routes>
    </Router>
  );
}

export default App;
