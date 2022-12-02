import { useState } from "react"

type Props = {}

function MarkdownReact({}: Props) {
 const [markdown, setMarkdown] = useState("")
  return (
    <>
    <div className="center_div">
        <textarea className="left_side"  id=""  cols={100}  rows = {20} value = {markdown} onChange = {(e)=>{
            setMarkdown(e.target.value)
        }}  ></textarea>
        <div className="right_side">{markdown}</div>
    </div>
    </>
  )
}

export default MarkdownReact