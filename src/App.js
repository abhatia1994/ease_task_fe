import { BrowserRouter } from "react-router-dom";
import "./App.css";
import { PrimaryButtonSmall } from "./components/Common/Buttons";
import { Header } from "./components/Common/Header";
import { BasicExample } from "./components/Router/Router";
import { RegisterVendor } from "./components/vendor/RegisterVendor";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <div className="main">
          <BasicExample />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
