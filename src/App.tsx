import {
  EditorProvider,
  Editor,
  Toolbar,
  BtnUndo,
  BtnRedo,
  BtnBold,
  BtnItalic,
  BtnUnderline,
  BtnStrikeThrough,
  BtnNumberedList,
  BtnBulletList,
  BtnLink,
  Separator,
  BtnStyles,
} from "react-simple-wysiwyg"

import "./editor.css"

import type {ContentEditableEvent} from "react-simple-wysiwyg"
// import {BtnStyles} from "./components/dropdowns"
import {useState} from "react"

export default function App() {
  const [html, setHtml] = useState("my <b>HTML</b>")

  function onChange(e: ContentEditableEvent) {
    setHtml(e.target.value)
  }

  return (
    <div className="flex h-screen w-screen items-center justify-center bg-gray-100">
      <div className="w-200">
        <h1 className="text-3xl font-bold mb-4 text-center">React WYSIWYG</h1>
        <EditorProvider>
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
              <BtnNumberedList />
              <BtnBulletList />
              <Separator />
              <BtnLink />
              <Separator />
              <BtnStyles />
            </Toolbar>
          </Editor>

          {/* 1. Stylized HTML Output */}
          <div className="rsw-ce p-4 bg-white border border-gray-300 shadow-sm my-6">
            <h2 className="font-bold mb-2">Rendered Output</h2>
            <div className="prose max-w-none" dangerouslySetInnerHTML={{__html: html}} />
          </div>

          {/* 2. Raw HTML Code Output */}
          <div className="p-4 bg-black text-green-400 border border-gray-700 shadow-sm">
            <h2 className="font-bold mb-2 text-white">HTML Code</h2>
            <pre className="whitespace-pre-wrap">{html}</pre>
          </div>
        </EditorProvider>
      </div>
    </div>
  )
}
