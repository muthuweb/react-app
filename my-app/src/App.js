import "./App.scss";
import Layout from "./components/Layout/Layout";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import ModelParent from "./components/ModelParent";

import { useState } from "react";

function App() {
  let [qty, setQty] = useState(0);

  function addCart() {
    setQty((qty += 1));
  }

  return (
    <div className="App">
      <Header cartQty={qty} className="App-header" />
      <Layout>
        <div className="row">
          <div className="col-sm-8">
            <h2>Main component</h2>
            <div className="mt-5"></div>
            <button onClick={addCart} type="button" className="btn btn-success">
              Add 1+ to cart
            </button>
          </div>
          <div className="col-sm-4">
            <ModelParent />
            <ModelParent />
            <ModelParent />
          </div>
        </div>
      </Layout>
      <Footer className="App-footer" />
    </div>
  );
}

export default App;