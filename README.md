# React WYSIWYG Editor

A simple and customizable WYSIWYG (What You See Is What You Get) HTML editor built with React and [react-simple-wysiwyg](https://github.com/andrerpena/react-simple-wysiwyg).

## Features
- Rich text editing with formatting toolbar (bold, italic, underline, lists, links, etc.)
- Undo/redo, clear formatting, and HTML view support
- Scrollable editor area with max height
- Easy integration and customization

## Getting Started

### Installation

Clone the repository and install dependencies:

```bash
npm install
```

### Running the App

Start the development server:

```bash
npm run dev
```

Open your browser and navigate to `http://localhost:5173` (or the port shown in your terminal).

## Usage

The main editor component is `Editor.tsx`. It can be imported and used in your React application as follows:

```tsx
import Editor from './src/Editor';

function App() {
  const [html, setHtml] = useState('');
  return <Editor html={html} setHtml={setHtml} />;
}
```

## Project Structure

- `src/Editor.tsx` - Main WYSIWYG editor component
- `src/App.tsx` - Example usage of the editor
- `src/Output.tsx` - (Optional) Output display component
- `public/` - Static assets
- `index.html` - Main HTML file

## Customization

You can customize the toolbar, styles, and editor behavior by modifying the `Editor.tsx` component and related CSS files.

## License

This project is open source and available under the MIT License.
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
