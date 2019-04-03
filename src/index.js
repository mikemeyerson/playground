import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";


function App() {
  return (
    <main className="App">
      <h1>Hey There!</h1>
      <h2>I haven't added anything here yet.</h2>
      <p> Try <pre>npm run storybook</pre> to check out the components.</p>
    </main>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
