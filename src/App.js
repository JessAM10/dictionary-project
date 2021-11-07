import Dictionary from "./Dictionary";
import "./App.css";
import "./FontAwesomeIcons";


export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Dictionary defaultKeyword="sunset" />
        <section>
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
        </section>
      </div>
    </div>
  );
}
