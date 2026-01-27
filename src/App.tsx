import { useState } from "react"
import Editor from "./Editor"
import Output from "./Output"

import "./editor.css"

// ...existing code...

export default function App() {
  const [html, setHtml] = useState("my <b>HTML</b>")

  return (
    <div className="flex h-screen w-screen items-center justify-center bg-gray-100">
      <div className="w-200">
        <h1 className="text-3xl font-bold mb-4 text-center">React WYSIWYG</h1>
        <Editor html={html} setHtml={setHtml} />
        <Output html={html} />
      </div>
    </div>
  )
}
