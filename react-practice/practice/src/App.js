import logo from "./logo.svg";
import "./App.css";
import { StopWatch } from "./components/StopWatch";
import { Timer } from "./components/Timer";
import { UseMemoComponent } from "./components/UseMemoComponent";
import { UseCallBack } from "./components/UseCallBack";

function App() {
  return (
    <div className="App">
      {/* <StopWatch /> */}
      {/* <Timer /> */}
      {/* <UseMemoComponent /> */}
      <UseCallBack />
    </div>
  );
}

export default App;
