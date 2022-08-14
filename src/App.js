import { useState} from "react";
import "./App.css";
import Converter from "./Converter";
import Panel from "./Panel";
import Header from "./Header";

import ReactMarkdown from "react-markdown";
import EmailHTML from "./emailHTML";

function App() {
  const [markdownText, setMarkdownText] = useState("hi there");

  const handleChange = (e) => {
    setMarkdownText(e.target.value);
    console.log(markdownText);
  };



  const snippets = {
    unsubscribe: `<div style="padding:20px;">
    <p style=" background-color:transparent; color:#666; font-family:source sans pro,helvetica,arial; font-size:13px; line-height:25px;">You&#39;re receiving this email since you&#39;re a Center Centre &ndash; UIE&nbsp;subscriber.<br />
    Copyright 2020 Center Centre Inc. All Rights Reserved.<br />
    <br />
    <a href="*|UPDATE_PROFILE|*" style="color:#666;">Update your preferences</a> or <a href="*|UNSUB|*" style="color:#666;">Unsubscribe *|EMAIL|* </a> from this list.</p>
    </div>`,

  }


  return (
    <Converter>
      <Header />

      <Panel>
        <textarea
          className="textarea"
          input={markdownText}
          placeholder="markdown text here"
          onChange={(e) => handleChange(e)}
        ></textarea>



        <ReactMarkdown   className="markdownBox" components={ EmailHTML} children={markdownText} />



      </Panel>




    </Converter>
  );
}

export default App;
