export async function GET() {
    const request = await fetch("https://raw.githubusercontent.com/Raffa064/rna.js/main/rna.js")
    const libCode = await request.text()
    const response = new Response(libCode, {
        headers: {
            'Content-Type': 'text/javascript',
            'Content-Disposition': 'attachment; filename=rna.js'
        }
    })
    return response
}