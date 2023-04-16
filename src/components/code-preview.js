import { CodeBlock } from "@/components/code-block";
import shiki from 'shiki'

export async function CodePreview({code, lang}) {
    const highlighter = await shiki.getHighlighter({theme: 'dracula'})
    const html = highlighter.codeToHtml(code, {lang: lang})
    
    return (
        <CodeBlock raw={code} preview={html}></CodeBlock>
    )
}