import { useState } from "react";
import Modal from "./Modal";

import "./App.css";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="App">
      <header className="App-header">
        <button onClick={() => setIsOpen(true)}>Open Modal</button>
        <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} />
      </header>
    </div>
  );
}

export default App;
