import { Fragment } from "react";
import Home from "./components/home/Home";
import HorizontalScrolling from "./components/horizontal-scrolling/HorizontalScrolling";
import NavBar from "./components/nav-bar/NavBar";
import TitleComponent from "./components/title/TitleComponent";

function App() {
  return (
    <Fragment>
      <Home />
      <TitleComponent>advertising</TitleComponent>
      <HorizontalScrolling />
      <TitleComponent>advertising</TitleComponent>
      <HorizontalScrolling />
      <NavBar />
    </Fragment>
  );
}

export default App;
