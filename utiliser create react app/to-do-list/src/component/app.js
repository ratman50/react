import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  faListAlt,
  FaCheckSquare,
  FaPlusSquare,
  FaTrash,
  FaList,
  FaListAlt,
} from "react-icons/fa";

class App extends React.Component {
  render() {
    return (
      <section id="todo">
        <h1 className="m-3">Liste de tâches</h1>
        <ul className="list-group m-3">
          <li className="list-group-item d-flex align-items-center justify-content-between">
            Ranger la vaisselle
            <button className="btn btn-sm ml-auto btn-outline-success">
              &#x2713;
            </button>
          </li>
          <li className="list-group-item d-flex align-item-center justify-content-between">
            Répondre appel d'offres
            <button className="btn btn-sm ml-auto btn-outline-success">
              &#x2713;
            </button>
          </li>
          <li className="list-group-item d-flex align-items-center justify-content-between">
            Signer contrat
            <button className="btn btn-sm ml-auto btn-outline-success">
              &#x2713;
            </button>
          </li>
        </ul>
        <footer
          className="d-flex justify-content-between bg-secondary p-3"
          id="mainfooter"
        >
          <div className="btn-group">
            <a href="#" className="btn btn-outline-dark bg-light">
              <FaListAlt />
            </a>
            <a href="#" className="btn btn-outline-dark bg-light">
              <FaCheckSquare />
            </a>
            <a href="#" className="btn btn-outline-dark bg-light">
              <FaPlusSquare />
            </a>
          </div>
          <button className="btn btn-outline-dark bg-light">
            <FaTrash />
          </button>
        </footer>
      </section>
    );
  }
}
export default App;
