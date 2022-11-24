import "./App.scss";
import Layout from "./components/Layout/Layout";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Header className="App-header" />
      <Layout>
        <h2>Main component</h2>
      </Layout>
      <Footer className="App-footer" />
    </div>
  );
}

export default App;
