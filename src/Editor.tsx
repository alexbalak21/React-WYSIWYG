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
  html: string,
  className?: string,
  setHtml: (value: string) => void
}

export default function Editor({ html, className, setHtml }: EditorProps) {
  function onChange(e: ContentEditableEvent) {
    setHtml(e.target.value)
  }

  return (
    <EditorProvider>
      <WysiwygEditor
        value={html}
        onChange={onChange}
        className={className}
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
