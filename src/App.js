import "./App.css";
import { PrimaryButtonSmall } from "./components/Common/Buttons";
import { Header } from "./components/Common/Header";
import { BasicExample } from "./components/Router/Router";
import { RegisterVendor } from "./components/vendor/RegisterVendor";

function App() {
  return (
    <div className="App">
      {/* <RegisterVendor /> */}
      <Header />
      <div className="main">
        <BasicExample />
      </div>
    </div>
  );
}

export default App;
