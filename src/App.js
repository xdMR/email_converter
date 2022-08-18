import { useState, useEffect } from "react";

import ReactMarkdown from "react-markdown";
import EmailHTML from "./emailHTML";

import "./App.css";
import Converter from "./Converter";
import Panel from "./Panel";
import Header from "./Header";



function App() {
  const [markdownText, setMarkdownText] = useState("here is how it looks like");
  const [showBoxes, setShowBoxes] = useState({
    textarea: true,
    markdownBox: true,
  });


  const ShowBoxes = (data) => {
   setShowBoxes(data);
  }

  const handleChange = (e) => {
    setMarkdownText(e.target.value);
    console.log(markdownText);
  };


  const [html, setHtml] = useState("");
  useEffect(() => {
    const el = document.querySelector(".markdownBox");
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
            className={`textarea  ${showBoxes.textarea ? "" : "hide"}  ${showBoxes.textarea&&!showBoxes.markdownBox?"taller":""} `}
          input={markdownText}
          placeholder="type your markdown text here..."
          onChange={(e) => handleChange(e)}
        ></textarea>

        <ReactMarkdown
          className={`markdownBox  ${showBoxes.markdownBox ? "" : "hide"}
          ${showBoxes.markdownBox&&!showBoxes.textarea?"taller":""}
          `}


          components={EmailHTML}
          children={markdownText}
        />
      </Panel>

      <Panel>
        <div className="htmlBox">
          <pre>
            <code>{html}</code>
          </pre>
        </div>
      </Panel>
      <button className="btn-copy" onClick={() => {navigator.clipboard.writeText(html)}}
>Copy code </button>
    </Converter>
  );
}

export default App;
