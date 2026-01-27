import {
  EditorProvider,
  Editor as WysiwygEditor,
  Toolbar,
  BtnUndo,
  BtnRedo,
  BtnBold,
  BtnClearFormatting,
  BtnItalic,
  BtnUnderline,
  BtnStrikeThrough,
  BtnNumberedList,
  BtnBulletList,
  BtnLink,
  Separator,
  HtmlButton,
  BtnStyles,
} from "react-simple-wysiwyg"
import type { ContentEditableEvent } from "react-simple-wysiwyg"

interface EditorProps {
  html: string
  setHtml: (value: string) => void
}

export default function Editor({ html, setHtml }: EditorProps) {
  function onChange(e: ContentEditableEvent) {
    setHtml(e.target.value)
  }

  return (
    <EditorProvider>
      <WysiwygEditor
        value={html}
        onChange={onChange}
        className="
          w-full h-64 p-2 bg-white shadow-sm
          border border-gray-300
          focus-within:border-gray-400
          focus:outline-none
        "
      >
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
          <Separator />
          <BtnClearFormatting />
          <HtmlButton />
        </Toolbar>
      </WysiwygEditor>
    </EditorProvider>
  )
}
