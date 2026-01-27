/**
 * Editor.tsx
 *
 * A React component that provides a WYSIWYG HTML editor using react-simple-wysiwyg.
 *
 * Props:
 *   - html: string - The HTML content to display and edit.
 *   - className?: string - Optional CSS class for custom styling.
 *   - setHtml: (value: string) => void - Callback to update the HTML content.
 *
 * Features:
 *   - Rich text editing with formatting toolbar (bold, italic, underline, lists, links, etc.)
 *   - Undo/redo, clear formatting, and HTML view support.
 *   - Scrollable editor area with max height.
 */
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
      <div className="overflow-y-auto max-h-96">
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
      </div>
    </EditorProvider>
  )
}
