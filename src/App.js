import React from "react";
import About from "./components/About";
import Nav from "./components/Nav";

function App() {
  return (
    //它不是 HTML。它是一种称为JSX的语言,可以在 JavaScript中表示 HTML
    <div>
      <Nav></Nav>
      <main>
        <About></About>
      </main>
    </div>
  );
}

export default App;

// To effect any change on the application, we need to either modify this file or add components inside it.
