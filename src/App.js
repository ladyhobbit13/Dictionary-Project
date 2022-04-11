import letter from "./letter.png";
import Dictionary from "./Dictionary";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img src={letter} className="App-logo img-fluid" alt="letters" />
        </header>
        <main>
          <Dictionary defaultKeyword="dictionary" />
        </main>
        <footer className="app-footer text-center">
          <small>
            This project was coded by{" "}
            <a href="https://focused-borg-61dda1.netlify.app/">
              Claire Fleischer
            </a>{" "}
            and is{" "}
            <a href="https://github.com/ladyhobbit13/Dictionary-Project">
              open-sourced on GitHub
            </a>
            .
          </small>
        </footer>
      </div>
    </div>
  );
}

export default App;
