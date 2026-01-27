
interface OutputProps {
  html: string
}

export default function Output({ html }: OutputProps) {
  return (
    <div>
      <div className="rsw-ce p-4 bg-white border border-gray-300 shadow-sm my-6">
        <h2 className="font-bold mb-2">Rendered Output</h2>
        <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: html }} />
      </div>
      <div className="p-4 bg-black text-green-400 border border-gray-700 shadow-sm">
        <h2 className="font-bold mb-2 text-white">HTML Code</h2>
        <pre className="whitespace-pre-wrap">{html}</pre>
      </div>
    </div>
  )
}
