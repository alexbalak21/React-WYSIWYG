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
    <div className="flex h-screen w-screen items-center justify-center bg-gray-100 dark:bg-gray-800 p-4">
      <div className="w-200">
        <h1 className="text-3xl font-bold mb-4 text-center text-gray-900 dark:text-gray-100">React WYSIWYG</h1>
        <Editor html={html} setHtml={setHtml} />
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
