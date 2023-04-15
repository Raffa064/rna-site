'use client'

import { useState } from "react"

export function CodeBlock({raw, preview}) {
    const [hasCopied, setHasCopied] = useState(false)
    
    function handleCopyToClipboard() {
        setHasCopied(true)
    }

    return (
        <div className="code-block">
            <h1>{''+hasCopied}</h1>
            <p onClick={() => setHasCopied(true)}>{'teste'+hasCopied}</p>
            <div dangerouslySetInnerHTML={{__html: preview}}></div>
        </div>
    )
}