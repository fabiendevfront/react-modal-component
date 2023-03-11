import React from "react";
import ReactDOM from "react-dom/client";
import ModalExample from "./example/ModalExample";
import "./example/modalExample.scss";
import ReactModalComponent from "./lib/components/ReactModalComponent";
export default ReactModalComponent;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <ModalExample />
    </React.StrictMode>
);