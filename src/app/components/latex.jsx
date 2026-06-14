// // components/LatexRenderer.jsx
// 'use client'
// import 'katex/dist/katex.min.css'
// import { InlineMath, BlockMath } from 'react-katex'

// export default function LatexRenderer({ text }) {
//   // Split text into latex and normal parts
//   if (!text) return null
//   const parts = text.split(/(\$\$[\s\S]*?\$\$|\$[\s\S]*?\$)/g)

//   return (
//     <span style={{ color: 'black' }}>  {/* ← yeh add kiya */}
//       {parts.map((part, i) => {
//         if (part.startsWith('$$') && part.endsWith('$$')) {
//           return (
//             <BlockMath key={i} math={part.slice(2, -2)} />
//           )
//         } else if (part.startsWith('$') && part.endsWith('$')) {
//           return (
//             <InlineMath key={i} math={part.slice(1, -1)} />
//           )
//         } else {
//           return <span key={i} style={{ color: 'black' }}>{part}</span>
//         }
//       })}
//     </span>
//   )
// }

// 'use client'
// import 'katex/dist/katex.min.css'
// import { InlineMath, BlockMath } from 'react-katex'

// export default function LatexRenderer({ text }) {
//   if (!text) return null

//   const parts = text.split(/(\$\$[\s\S]*?\$\$|\$[\s\S]*?\$|\\\[[\s\S]*?\\\]|\\\([\s\S]*?\\\))/g)

//   return (
//     <span>
//       {parts.map((part, i) => {
//         if (part.startsWith('$$') && part.endsWith('$$')) {
//           return <BlockMath key={i} math={part.slice(2, -2)} />
//         } else if (part.startsWith('\\[') && part.endsWith('\\]')) {
//           return <BlockMath key={i} math={part.slice(2, -2)} />
//         } else if (part.startsWith('$') && part.endsWith('$')) {
//           return <InlineMath key={i} math={part.slice(1, -1)} />
//         } else if (part.startsWith('\\(') && part.endsWith('\\)')) {
//           return <InlineMath key={i} math={part.slice(2, -2)} />
//         } else {
//           return <span key={i}>{part}</span>
//         }
//       })}
//     </span>
//   )
// }

// utils/parseLatex.js


// components/LatexRenderer.jsx
// components/LatexRenderer.jsx
// 'use client'
// import { useEffect, useRef } from 'react'
// import 'katex/dist/katex.min.css'
// import renderMathInElement from 'katex/contrib/auto-render'

// function preprocessLatex(text) {
//   if (!text) return ''

//   // already delimited hai toh as-is
//   if (/\$|\\\(|\\\[/.test(text)) return text

//   // LaTeX tokens dhundo — words jisme ^ _ \ { } hain
//   // unhe \(...\) mein wrap karo, baaki plain text rehne do
//   return text
//     .split(/(\s+)/)
//     .map(token => {
//       if (/\s+/.test(token)) return token // whitespace as-is
//       if (/[\\^_{}]/.test(token)) return `\\(${token}\\)` // LaTeX token wrap karo
//       return token // plain word as-is
//     })
//     .join('')
// }

// export default function LatexRenderer({ text }) {
//   const ref = useRef(null)
//   const processed = preprocessLatex(text)

//   useEffect(() => {
//     if (!ref.current || !processed) return
//     ref.current.textContent = processed
//     renderMathInElement(ref.current, {
//       delimiters: [
//         { left: '$$',  right: '$$',  display: true  },
//         { left: '\\[', right: '\\]', display: true  },
//         { left: '$',   right: '$',   display: false },
//         { left: '\\(', right: '\\)', display: false },
//       ],
//       throwOnError: false,
//     })
//   }, [processed])

//   return <span ref={ref}>{processed}</span>
// }

















// 'use client'
// import { useRef, useEffect } from 'react'
// import 'katex/dist/katex.min.css'
// import katex from 'katex'

// function renderParts(text) {
//   if (!text) return []

//   // sabhi delimiter types + bare LaTeX tokens
//   const REGEX = /(\$\$[\s\S]*?\$\$|\\\[[\s\S]*?\\\]|\$[^\$\n]+?\$|\\\([\s\S]*?\\\)|(?:[\w@]*(?:[_^]\{[^}]*\}|[_^][^\s,;])+(?:\s*[_^]\{[^}]*\})*[\w@]*)|\\[a-zA-Z]+(?:\{[^}]*\})*)/g

//   const parts = []
//   let lastIndex = 0
//   let match

//   while ((match = REGEX.exec(text)) !== null) {
//     if (match.index > lastIndex) {
//       parts.push({ type: 'text', content: text.slice(lastIndex, match.index) })
//     }

//     const raw = match[0]

//     if (raw.startsWith('$$') || raw.startsWith('\\[')) {
//       parts.push({ type: 'block', content: raw.startsWith('$$') ? raw.slice(2, -2) : raw.slice(2, -2) })
//     } else if (raw.startsWith('$') || raw.startsWith('\\(')) {
//       const inner = raw.startsWith('$') ? raw.slice(1, -1) : raw.slice(2, -2)
//       parts.push({ type: 'inline', content: inner })
//     } else {
//       // bare LaTeX token — e.g. x_{O_2}, \rightarrow, \times
//       parts.push({ type: 'inline', content: raw })
//     }

//     lastIndex = match.index + raw.length
//   }

//   if (lastIndex < text.length) {
//     parts.push({ type: 'text', content: text.slice(lastIndex) })
//   }

//   return parts
// }

// function KatexInline({ math }) {
//   const ref = useRef(null)
//   useEffect(() => {
//     if (!ref.current) return
//     try {
//       katex.render(math, ref.current, { throwOnError: false, displayMode: false })
//     } catch (e) {}
//   }, [math])
//   return <span ref={ref} />
// }

// function KatexBlock({ math }) {
//   const ref = useRef(null)
//   useEffect(() => {
//     if (!ref.current) return
//     try {
//       katex.render(math, ref.current, { throwOnError: false, displayMode: true })
//     } catch (e) {}
//   }, [math])
//   return <div ref={ref} />
// }

// export default function LatexRenderer({ text }) {
//   console.log("RAW:", text)
//   if (!text) return null
//   const parts = renderParts(text)

//   return (
//     <span>
//       {parts.map((part, i) => {
//         if (part.type === 'block')  return <KatexBlock  key={i} math={part.content} />
//         if (part.type === 'inline') return <KatexInline key={i} math={part.content} />
//         return <span key={i}>{part.content}</span>
//       })}
//     </span>
//   )
// }


// 'use client'
// import { useRef, useEffect } from 'react'
// import 'katex/dist/katex.min.css'
// import katex from 'katex'

// function renderParts(text) {
//   if (!text) return []

//   const REGEX = /(\$\$[\s\S]*?\$\$|\\\[[\s\S]*?\\\]|\$[^\$\n]+?\$|\\\([\s\S]*?\\\)|(?:[\w@]*(?:[_^]\{[^}]*\}|[_^][^\s,;])+(?:\s*[_^]\{[^}]*\})*[\w@]*)|\\[a-zA-Z]+(?:\{[^}]*\})*)/g

//   const parts = []
//   let lastIndex = 0
//   let match

//   // sabse end mein
//   console.log("PARTS:", JSON.stringify(parts, null, 2))

//   while ((match = REGEX.exec(text)) !== null) {
//     if (match.index > lastIndex) {
//       const plainText = text.slice(lastIndex, match.index)
//       const raw = match[0]

//       // check karo agar plain text ka last word LaTeX ke saath merge hona chahiye
//       // e.g. "for O" + "\(_2\)" → "for " + "O\(_2\)"
//       if (raw.startsWith('\\(') && raw.endsWith('\\)')) {
//         const inner = raw.slice(2, -2) // e.g. "_2"
//         // agar inner sirf subscript/superscript hai toh preceding word merge karo
//         if (/^[_^]/.test(inner)) {
//           const wordMatch = plainText.match(/^([\s\S]*\s)(\S+)$/)
//           if (wordMatch) {
//             // pehle plain text push karo (last word minus)
//             if (wordMatch[1]) parts.push({ type: 'text', content: wordMatch[1] })
//             // last word + subscript ek saath inline
//             parts.push({ type: 'inline', content: wordMatch[2] + inner })
//             lastIndex = match.index + raw.length
//             continue
//           } else {
//             // koi space nahi — poora plainText merge karo
//             if (plainText) parts.push({ type: 'inline', content: plainText + inner })
//             else parts.push({ type: 'inline', content: inner })
//             lastIndex = match.index + raw.length
//             continue
//           }
//         }
//       }

//       if (plainText) parts.push({ type: 'text', content: plainText })
//     }

//     const raw = match[0]

//     if (raw.startsWith('$$') || raw.startsWith('\\[')) {
//       parts.push({ type: 'block', content: raw.slice(2, -2) })
//     } else if (raw.startsWith('$') || raw.startsWith('\\(')) {
//       parts.push({ type: 'inline', content: raw.startsWith('$') ? raw.slice(1, -1) : raw.slice(2, -2) })
//     } else {
//       parts.push({ type: 'inline', content: raw })
//     }

//     lastIndex = match.index + raw.length
//   }

//   if (lastIndex < text.length) {
//     parts.push({ type: 'text', content: text.slice(lastIndex) })
//   }

//   return parts
// }

// function KatexInline({ math }) {
//   const ref = useRef(null)
//   useEffect(() => {
//     if (!ref.current) return
//     try {
//       katex.render(math, ref.current, { throwOnError: false, displayMode: false })
//     } catch (e) {}
//   }, [math])
//   return <span ref={ref} />
// }

// function KatexBlock({ math }) {
//   const ref = useRef(null)
//   useEffect(() => {
//     if (!ref.current) return
//     try {
//       katex.render(math, ref.current, { throwOnError: false, displayMode: true })
//     } catch (e) {}
//   }, [math])
//   return <div ref={ref} />
// }

// export default function LatexRenderer({ text }) {
//   if (!text) return null
//   const parts = renderParts(text)

//   // return (
//   //   <span>
//   //     {parts.map((part, i) => {
//   //       if (part.type === 'block')  return <KatexBlock  key={i} math={part.content} />
//   //       if (part.type === 'inline') return <KatexInline key={i} math={part.content} />
//   //       return <span key={i}>{part.content}</span>
//   //     })}
//   //   </span>
//   // )
//   return (
//   <div className="whitespace-pre-wrap leading-8">
//     {parts.map((part, i) => {
//       if (part.type === "block") {
//         return <KatexBlock key={i} math={part.content} />;
//       }

//       if (part.type === "inline") {
//         return <KatexInline key={i} math={part.content} />;
//       }

//       return (
//         <span key={i}>
//           {part.content
//             .split(/\n/)
//             .map((line, idx, arr) => (
//               <span key={idx}>
//                 {line}
//                 {idx < arr.length - 1 && <br />}
//               </span>
//             ))}
//         </span>
//       );
//     })}
//   </div>
// );
// }

'use client'
import { useRef, useEffect } from 'react'
import 'katex/dist/katex.min.css'
import katex from 'katex'

function renderParts(text) {
  if (!text) return []

  const REGEX = /(\$\$[\s\S]*?\$\$|\\\[[\s\S]*?\\\]|\$[^\$\n]+?\$|\\\([\s\S]*?\\\)|(?:[\w@]*(?:[_^]\{[^}]*\}|[_^][^\s,;])+(?:\s*[_^]\{[^}]*\})*[\w@]*)|\\[a-zA-Z]+(?:\{[^}]*\})*)/g

  const parts = []
  let lastIndex = 0
  let match

  while ((match = REGEX.exec(text)) !== null) {
    if (match.index > lastIndex) {
      const plainText = text.slice(lastIndex, match.index)
      const raw = match[0]

      if (raw.startsWith('\\(') && raw.endsWith('\\)')) {
        const inner = raw.slice(2, -2)
        if (/^[_^]/.test(inner)) {
          const wordMatch = plainText.match(/^([\s\S]*\s)(\S+)$/)
          if (wordMatch) {
            if (wordMatch[1]) parts.push({ type: 'text', content: wordMatch[1] })
            parts.push({ type: 'inline', content: wordMatch[2] + inner })
            lastIndex = match.index + raw.length
            continue
          } else {
            if (plainText) parts.push({ type: 'inline', content: plainText + inner })
            else parts.push({ type: 'inline', content: inner })
            lastIndex = match.index + raw.length
            continue
          }
        }
      }

      if (plainText) parts.push({ type: 'text', content: plainText })
    }

    const raw = match[0]

    if (raw.startsWith('$$') || raw.startsWith('\\[')) {
      parts.push({ type: 'block', content: raw.slice(2, -2) })
    } else if (raw.startsWith('$') || raw.startsWith('\\(')) {
      parts.push({ type: 'inline', content: raw.startsWith('$') ? raw.slice(1, -1) : raw.slice(2, -2) })
    } else {
      parts.push({ type: 'inline', content: raw })
    }

    lastIndex = match.index + raw.length
  }

  if (lastIndex < text.length) {
    parts.push({ type: 'text', content: text.slice(lastIndex) })
  }

  return parts
}

function splitIntoSteps(text) {
  if (!text) return [text]

  const steps = []
  let current = ''
  let i = 0

  while (i < text.length) {
    // Skip LaTeX blocks: $$...$$ or \[...\]
    if (
      (text[i] === '$' && text[i + 1] === '$') ||
      (text[i] === '\\' && text[i + 1] === '[')
    ) {
      const closing = text[i] === '$' ? '$$' : '\\]'
      const end = text.indexOf(closing, i + 2)
      if (end !== -1) {
        current += text.slice(i, end + closing.length)
        i = end + closing.length
        continue
      }
    }

    // Skip inline LaTeX: $...$ or \(...\)
    if (
      (text[i] === '$' && text[i + 1] !== '$') ||
      (text[i] === '\\' && text[i + 1] === '(')
    ) {
      const closing = text[i] === '$' ? '$' : '\\)'
      const start = i + (text[i] === '$' ? 1 : 2)
      const end = text.indexOf(closing, start)
      if (end !== -1) {
        current += text.slice(i, end + closing.length)
        i = end + closing.length
        continue
      }
    }

    // Check for sentence boundary: ". " followed by capital or keyword
    if (
      text[i] === '.' &&
      text[i + 1] === ' ' &&
      /[A-Z]/.test(text[i + 2] || '')
    ) {
      current += '.'
      steps.push(current.trim())
      current = ''
      i += 2 // skip ". "
      continue
    }

    current += text[i]
    i++
  }

  if (current.trim()) steps.push(current.trim())

  return steps.filter(Boolean)
}

function KatexInline({ math }) {
  const ref = useRef(null)
  useEffect(() => {
    if (!ref.current) return
    try {
      katex.render(math, ref.current, { throwOnError: false, displayMode: false })
    } catch (e) {}
  }, [math])
  return <span ref={ref} />
}

function KatexBlock({ math }) {
  const ref = useRef(null)
  useEffect(() => {
    if (!ref.current) return
    try {
      katex.render(math, ref.current, { throwOnError: false, displayMode: true })
    } catch (e) {}
  }, [math])
  return <div ref={ref} />
}

export default function LatexRenderer({ text }) {
  if (!text) return null

  const steps = splitIntoSteps(text)

  return (
    <div className="flex flex-col gap-2">
      {steps.map((step, i) => {
        const parts = renderParts(step)
        return (
          <div key={i} className="leading-8">
            {parts.map((part, j) => {
              if (part.type === 'block') return <KatexBlock key={j} math={part.content} />
              if (part.type === 'inline') return <KatexInline key={j} math={part.content} />
              return (
                <span key={j}>
                  {part.content
                    .split(/\n/)
                    .map((line, idx, arr) => (
                      <span key={idx}>
                        {line}
                        {idx < arr.length - 1 && <br />}
                      </span>
                    ))}
                </span>
              )
            })}
          </div>
        )
      })}
    </div>
  )
}