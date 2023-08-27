import React from "react";
import { Button } from "./components/Button";

function App() {
  return (
    <div>
      <h1>Hello react component library</h1>
      <Button onClick={() => alert("Hello from button")}>Click me</Button>
    </div>
  );
}

export default App;
