import { PageContainer } from "@/components/page-container"
import Link from "next/link"

export default function AboutPage() {
    return (
        <PageContainer>
            <h2>Sobre</h2>
            <p>O <strong>rna.js</strong> é uma biblioteca para criação de redes neurais com aprendizado por reforço, utilizando algorítimo genético e seleção artificial.</p>
            <p>Show case: <a href='https://raffa064.github.io/rna.js'>Flappy bird with rna.js</a></p>
            <h2>Como funciona?</h2>
            <p>A biblioteca <strong>rna.js</strong> usa redes MLP (Multi Layer Perceptron), com camadas <strong>fully connected</strong>, e possui um sistema básico para implementação de treinamentos com aprendizado por reforço, algorítimo genético e seleção artificial.</p>
            <h2>Treinamento de RNAs com rna.js</h2>
            <p>Como dito antes, os treinamentos com <strong>rna.js</strong> utilizam aprendizado por reforço com algorítimo genético e seleção artificial, ou seja, as redes são criadas em forma de agentes num ambiente simulado, com <strong>pesos</strong> e <strong>bias</strong> aleatórios, e em seguida, passam a interagir com o ambiente, marcando pontuação conforme compre seus objetivos, e quando todas terminarem seu treinamento de acordo com as regras da simulação, uma nova geração é criada com base nos melhores indivíduos da população anterior, e tudo se reinicia, ate que a o treino seja encerrado.</p>
            <h2>Open Source</h2>
            <p>Nosso código fonte está no <a href="https://github.com/Raffa064/rna.js">github</a>, e aberto a contribuições.</p>
            <h2>Primeiros passos</h2>
            <p>Se você quiser usar a nossa biblioteca, veja a página <Link href="/first-step">Primeiros passos</Link>.</p>
        </PageContainer>
    )
}