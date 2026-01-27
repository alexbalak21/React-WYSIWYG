import Editor from "react-simple-wysiwyg"
import type {ContentEditableEvent} from "react-simple-wysiwyg"
import {useState} from "react"

export default function App() {
  const [html, setHtml] = useState("my <b>HTML</b>")

  function onChange(e: ContentEditableEvent) {
    setHtml(e.target.value)
  }

  return (
    <div className="flex h-screen w-screen items-center justify-center bg-gray-100">
      <div>
        <h1 className="text-3xl font-bold mb-4 text-center">React WYSIWYG</h1>
        <Editor value={html} onChange={onChange} />
      </div>
    </div>
  )
}
