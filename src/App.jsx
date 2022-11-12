import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { FormikForm } from "./components/FormikForm";
import { ReactHookForm } from "./components/ReactHookForm";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <FormikForm />
      {/* <ReactHookForm /> */}
    </div>
  );
}

export default App;
