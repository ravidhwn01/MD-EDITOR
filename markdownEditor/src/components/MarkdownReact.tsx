import { useState } from "react";
import ReactMarkdown from "react-markdown";
type Props = {};

function MarkdownReact({}: Props) {
  const [markdown, setMarkdown] = useState("");
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-5">
        <textarea
          className="left_side"
          cols={100}
          rows={20}
          value={markdown}
          onChange={(e) => {
            setMarkdown(e.target.value);
          }}
        ></textarea>

          </div>
          <div className="col-5">
        <div className="right_side">
          <ReactMarkdown>{markdown}</ReactMarkdown>
        </div>

          </div>
        </div>
      </div>
    </>
  );
}

export default MarkdownReact;
