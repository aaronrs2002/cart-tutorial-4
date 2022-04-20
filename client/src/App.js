
import React, { useState, useEffect } from "react";
import './App.css';
import Nav from "./components/Nav";
import Cart from "./components/Cart"
import PurchaseLog from './components/PurchaseLog';
import CMS from "./components/CMS";

function App() {
  let [loaded, setLoaded] = useState(false);
  let [activeModule, setActiveModule] = useState("cart");
  let [alert, setAlert] = useState("default");
  let [alertType, setAlertType] = useState("danger");




  const showAlert = (theMessage, theType) => {
    setAlertType((alertType) => theType);
    setAlert((alert) => theMessage);
    setTimeout(() => {
      setAlert((alert) => "default");
    }, 3000)
  }

  useEffect(() => {

    if (loaded === false) {
      if (localStorage.getItem("activeModule")) {
        setActiveModule((activeModule) => localStorage.getItem("activeModule"));
      }
      setLoaded((loaded) => true);
    }


  })

  return (
    <React.Fragment>
      <Nav setActiveModule={setActiveModule} activeModule={activeModule} />
      {alert !== "default" ?
        <div className={"alert alert-" + alertType + " animated fadeInDown"} role="alert">{alert}</div>
        : null}
      <div className="container my-5">

        {activeModule === "cms" ? <CMS showAlert={showAlert} /> : null}
        {activeModule === "cart" ? <Cart showAlert={showAlert} /> : null}
        {activeModule === "log" ? <PurchaseLog /> : null}
      </div>
    </React.Fragment>
  );
}

export default App;
