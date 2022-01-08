import React from "react";

const Todo = () => (
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
);
export default Todo;
