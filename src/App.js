import { useState, useEffect } from "react";
import "./App.css";
import ReactMarkdown from "react-markdown";
import EmailHTML from "./emailHTML";

import Converter from "./Converter";
import Panel from "./Panel";
import Header from "./Header";

import Snippets from "./Snippets";

function App() {
  const [markdownText, setMarkdownText] = useState("here is how it looks like");
  const [showBoxes, setShowBoxes] = useState({
    textarea: true,
    markdownBox: true,
  });

  const ShowBoxes = (data) => {
    setShowBoxes(data);
  };

  const handleChange = (e) => {
    setMarkdownText(e.target.value);
    console.log(markdownText);
  };

  const [html, setHtml] = useState("");
  useEffect(() => {
    const el = document.querySelector(".renderHTML");
    if (el) {
      const mdHTML = el.innerHTML;

      setHtml(mdHTML);
    }
  }, [markdownText]);

  return (
    <Converter>
      <Header ShowBoxes={ShowBoxes} />

      <Panel>
        <textarea
          className={`textarea  ${showBoxes.textarea ? "" : "hide"}  ${
            showBoxes.textarea && !showBoxes.markdownBox ? "taller" : ""
          } `}
          input={markdownText}
          placeholder="type your markdown text here..."
          onChange={(e) => handleChange(e)}
        ></textarea>

        <div
          className={`markdownBox  ${showBoxes.markdownBox ? "" : "hide"}
          ${showBoxes.markdownBox && !showBoxes.textarea ? "taller" : ""}
          `}
          dangerouslySetInnerHTML={{ __html: html }}
        ></div>

        <ReactMarkdown
          className="renderHTML hide"
          components={EmailHTML}
          children={markdownText}
        />
      </Panel>

      <Panel>
        <div className="htmlBox">
          <pre>
            <code>{Snippets.precontent + html + Snippets.middle + Snippets.LeslieSignatuere + Snippets.aftercontent}</code>
          </pre>
        </div>
      </Panel>


      <div style={{ display: "flex" }}>
        <button
          className="btn-copy"
          onClick={() => {
            navigator.clipboard.writeText(
              Snippets.precontent + html + Snippets.middle + Snippets.signatureJared + Snippets.aftercontent
            );
          }}
        >
          Copy code
        </button>
        <button
          className="btn-copy"
          onClick={() => {
            navigator.clipboard.writeText(html);
          }}
        >
          Copy innerCode
        </button>
      </div>
    </Converter>
  );
}

export default App;
