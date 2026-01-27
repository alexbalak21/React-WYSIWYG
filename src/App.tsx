import {
  EditorProvider,
  Editor,
  Toolbar,
  BtnBold,
  BtnItalic,
  BtnUnderline,
  BtnStrikeThrough,
  BtnNumberedList,
  BtnBulletList,
  BtnLink,
  BtnUndo,
  BtnRedo,
  Separator,
} from "react-simple-wysiwyg"

import type {ContentEditableEvent} from "react-simple-wysiwyg"
import {useState} from "react"

type BlockTag = "p" | "h1" | "h2" | "pre"

function applyStyle(tag: BlockTag) {
  document.execCommand("formatBlock", false, tag)
}

export default function App() {
  const [html, setHtml] = useState("<p>my <b>HTML</b></p>")

  function onChange(e: ContentEditableEvent) {
    setHtml(e.target.value)
  }

  return (
    <EditorProvider>
      <div className="flex flex-col gap-6 p-6 bg-gray-100 min-h-screen">
        {/* Editor */}
        <Editor
          value={html}
          onChange={onChange}
          className="
            w-full h-64 p-2 bg-white shadow-sm
            border border-gray-300
            focus-within:border-gray-400
            focus:outline-none
          ">
          <Toolbar>
            <BtnUndo />
            <BtnRedo />
            <Separator />

            <BtnBold />
            <BtnItalic />
            <BtnUnderline />
            <BtnStrikeThrough />
            <Separator />

            <select className="rsw-dd" defaultValue="" onChange={(e) => applyStyle(e.target.value as BlockTag)}>
              <option hidden>Styles</option>
              <option value="p">Normal</option>
              <option value="h1">Header 1</option>
              <option value="h2">Header 2</option>
              <option value="pre">Code</option>
            </select>

            <Separator />

            <BtnNumberedList />
            <BtnBulletList />
            <Separator />

            <BtnLink />
          </Toolbar>
        </Editor>

        {/* 1. Stylized HTML Output */}
        <div className="p-4 bg-white border border-gray-300 shadow-sm">
          <h2 className="font-bold mb-2">Rendered Output</h2>
          <div className="prose max-w-none" dangerouslySetInnerHTML={{__html: html}} />
        </div>

        {/* 2. Raw HTML Code Output */}
        <div className="p-4 bg-black text-green-400 border border-gray-700 shadow-sm">
          <h2 className="font-bold mb-2 text-white">HTML Code</h2>
          <pre className="whitespace-pre-wrap">{html}</pre>
        </div>
      </div>
    </EditorProvider>
  )
}
