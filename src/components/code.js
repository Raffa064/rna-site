import shiki from 'shiki'

export async function Code({code, lang}) {
    const highlighter = await shiki.getHighlighter({theme: 'nord'})
    const html = highlighter.codeToHtml(code, {lang})
    return <div class="code-block" dangerouslySetInnerHTML={{__html: html}}></div>
}