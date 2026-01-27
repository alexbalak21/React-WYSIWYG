import { useState } from "react"
import Editor from "./Editor"
import Output from "./Output"
import "./editor.css"

export default function App() {
  const [html, setHtml] = useState("my <b>awesome</b> content")
  const [outputHtml, setOutputHtml] = useState("")

  function handleSeeOutput() {
    const text = html.replace(/<[^>]*>/g, "").trim();
    if (!text) return;
    setOutputHtml(html);
  }
  return (
    <div className="flex h-screen w-screen items-center justify-center bg-gray-100">
      <div className="w-200">
        <h1 className="text-3xl font-bold mb-4 text-center">React WYSIWYG</h1>
        <Editor html={html} setHtml={setHtml} className="
          w-full h-64 p-2 bg-white shadow-sm
          border border-gray-300
          focus-within:border-gray-400
          focus:outline-none
        "/>
        <button
          className="my-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
          onClick={handleSeeOutput}
        >
          See Output
        </button>
        <Output html={outputHtml} />
      </div>
    </div>
  )
}
