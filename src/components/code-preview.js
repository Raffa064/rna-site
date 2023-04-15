import shiki from 'shiki'
import { CodeBlock } from './code-block'

async function makePreview(code, lang) {
    const highlighter = await shiki.getHighlighter({theme: 'dracula'})
    return highlighter.codeToHtml(code, {
        lang: lang})
}

export async function CodePreview({code, lang}) {
    const html = await makePreview(code, lang)

    return <CodeBlock raw={code} preview={html}/>
}