import { Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import About from "./pages/About";
import Review from "./pages/Review";
import Video from "./pages/Video";
import Layout from "./components/layout/Layout";

function App() {
  return (
    <div className="App">
      <Layout>
        <Switch>
          <Route path="/" exact={true}><Home /></Route>
          <Route path="/shop"><Shop /></Route>
          <Route path="/about"><About /></Route>
          <Route path="/review"><Review /></Route>
          <Route path="/video"><Video /></Route>
        </Switch>
      </Layout>

    </div>
  );
}

export default App;
