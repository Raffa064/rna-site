'use client'

import { useState } from "react"

export function CodeBlock({ raw, preview }) {
    const [hasCopiedToClipBoard, setHasCopiedToClipBoard] = useState(false)

    const handleCopyToClipBoard = () => {
        navigator.clipboard.writeText(raw)
        setHasCopiedToClipBoard(true)
        setTimeout(() => setHasCopiedToClipBoard(false), 500)

    }

    return (
        <div className="code-block">
            <button onClick={handleCopyToClipBoard}>{ hasCopiedToClipBoard? 'Copiado!' : 'Copiar' }</button>
            <div dangerouslySetInnerHTML={{ __html: preview }}></div>
        </div>
    )
}