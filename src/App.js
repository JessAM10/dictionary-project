import Dictionary from "./Dictionary";
import "./App.css";
import "./FontAwesomeIcons";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Dictionary defaultKeyword="night" />
        <section>
          <footer>
            <a
              href="https://github.com/JessAM10/dictionary-project"
              target="_blank"
              rel="noreferrer"
              title="Dictionary App repository on GitHub"
            >
              Coded
            </a>{" "}
            by{" "}
            <a
              href="https://trusting-snyder-fb2caf.netlify.app/"
              target="_blank"
              rel="noreferrer"
              title="Jessica Allard's portfolio"
            >
              Jessica Allard
            </a>
          </footer>
        </section>
      </div>
    </div>
  );
}
