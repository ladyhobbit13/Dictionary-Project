import zaddy from "./zaddy.png";
import Dictionary from "./Dictionary";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img src={zaddy} className="App-logo img-fluid" alt="logo" />
        </header>
        <main>
          <Dictionary />
        </main>
        <footer className="app-footer text-center">
          <small>Coded by Claire Fleischer</small>
        </footer>
      </div>
    </div>
  );
}

export default App;
