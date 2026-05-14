// components/LatexRenderer.jsx
'use client'
import 'katex/dist/katex.min.css'
import { InlineMath, BlockMath } from 'react-katex'

export default function LatexRenderer({ text }) {
  // Split text into latex and normal parts
  if (!text) return null
  const parts = text.split(/(\$\$[\s\S]*?\$\$|\$[\s\S]*?\$)/g)

  return (
    <span style={{ color: 'black' }}>  {/* ← yeh add kiya */}
      {parts.map((part, i) => {
        if (part.startsWith('$$') && part.endsWith('$$')) {
          return (
            <BlockMath key={i} math={part.slice(2, -2)} />
          )
        } else if (part.startsWith('$') && part.endsWith('$')) {
          return (
            <InlineMath key={i} math={part.slice(1, -1)} />
          )
        } else {
          return <span key={i} style={{ color: 'black' }}>{part}</span>
        }
      })}
    </span>
  )
}