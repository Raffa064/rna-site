'use client';

import { useState } from "react";

export function CodeBlock({raw, preview}) {
    const [hasCopied, setHasCopied] = useState(false)
    
    const handleCopyToClipboard = () => {
        navigator.clipboard.writeText(raw)
        setHasCopied(true)
    }

    return (
        <div className="code-block">
            <button onClick={handleCopyToClipboard}>Copiar {""+hasCopied}</button>
            <div dangerouslySetInnerHTML={{__html: preview}}></div>
        </div>
    )
}