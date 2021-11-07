import Dictionary from "./Dictionary";
import "./App.css";
import "./FontAwesomeIcons";


export default function App() {
  return (
    <div className="App">
      <div className="container">
        <h1 className="text-center">Dictionary</h1>
        <Dictionary defaultKeyword="sunset"/>
        <footer>
          <a
            href="https://github.com/JessAM10/dictionary-project"
            target="_blank"
            rel="noreferrer"
          >
            Coded
          </a>{" "}
          by Jessica Allard
        </footer>
      </div>
    </div>
  );
}
