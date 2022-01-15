import GlobalStyles from "./components/styles/GlobalStyles";
import { useRoutes } from "react-router-dom";
import routes from "./router/routes";

function App() {
  const elements = useRoutes(routes);

  return (
    <div className="App">
      <GlobalStyles />
      {elements}
    </div>
  );
}

export default App;
