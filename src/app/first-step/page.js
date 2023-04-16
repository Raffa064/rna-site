import { CodeBlock } from "@/components/code-block";
import { CodePreview } from "@/components/code-preview";
import { PageContainer } from "@/components/page-container";
import Link from "next/link";

export default function FirstStep() {
    return (
        <PageContainer>
            <h2>Instalação e importação</h2>
            <p>A biblioteca <strong>rna.js</strong> pode ser usada tanto em paginas web estáticas quanto em aplicações <a href="https://nodejs.org/en/about">node</a>.</p>
            <h3>Páginas Web</h3>
            <p>Para instalar em páginas web, ou seja, no frontend, adicione a seguinte linha de código á tag head do seu html:</p>
            <CodePreview code={'<script src="https://rnajs.vercel.app/api/lib"></script>'} lang={'html'}></CodePreview>
            <p>Após isso, todas as funções da biblioteca ficaram disponíveis.</p>
            <h3>Aplicações Node.js</h3>
            <p>Para utilizar a biblioteca <strong>rna.js</strong> em aplicações <a href="https://nodejs.org/en/about">node</a>, baixe o arquivo da biblioteca em <Link href="/api/lib" download='rna.js' type='text/javascript'>nossa api</Link></p>
        </PageContainer>
    )
}