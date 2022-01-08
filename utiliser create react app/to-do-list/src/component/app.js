import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Todo from "./todo";
import NavBar from "./navbar";

class App extends React.Component {
  render() {
    return (
      <section id="todo">
        <h1 className="m-3">Liste de tâches</h1>
        <Todo />
        <NavBar />
      </section>
    );
  }
}
export default App;
