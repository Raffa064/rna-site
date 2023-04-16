import { CodePreview } from "@/components/code-preview";
import { Container } from "@/components/container";
import { PageContainer } from "@/components/page-container";

export default function SimulationPage() {
    return (
        <PageContainer>
            <h2>Simulações</h2>
            <p>As simulações, são como <strong>ambientes simulados</strong>, que são usadas para treinar as RNAs.</p>
            <p>A nossa biblioteca oferece um suporte básico que automatiza parte do treinamento, de forma em que você so precisa implementar as logicas especificas de sua simulação.</p>
            <h3>Como criar uma simulação</h3>
            <p>As simulações são construídas com a função <strong>createSimulation</strong>, que recebe como parâmetro os seguintes valores:</p>

            <Container>
                <h4><strong>agentDataFactory</strong></h4>
                <p>Função que deve retornar um objeto com o estado padrão de um agente.</p>
                <p><strong>OBS:</strong> O objeto retornado precisa ter uma função chamada de "fitness", a qual deve informar a pontuação do agente, em valor numérico. Exemplo:</p>
                <CodePreview code={'function createAgentData(agent) {\n    const data = {\n        points: 0,\n         errors: 0,\n        fitness: (agent) => agent.points - agent.errors\n    }\n\n   return data\n}'} lang="javascript"></CodePreview>

                <h4><strong>populationSize</strong></h4>
                <p>Quantidade de agentes por população. Note que esse não é o numero real de agentes por população, pois os pais da geração anterior são sempre inseridos novamente nas novas gerações, para evitar que acha uma queda da pontuação.</p>

                <h4><strong>populationParentAmount</strong></h4>
                <p>Número de agentes que serão usados pelo <strong>algorítimo genético</strong> para criar novas gerações.</p>

                <h4><strong>mutationRate</strong></h4>
                <p>A taxa de mutação é um valor de 0 a 1, que define qual é o percentual de change de ocorrer uma mutação em algum <strong>agente filho</strong> (ou seja, os agentes da geração inicial não sofrem mutação).</p>

                <h4><strong>rnaParams</strong></h4>
                <p>Objeto que carrega as parâmetros das RNAs, que serão abordados mais para frente nesta documentação.</p>
            </Container>

            <p>Passado os parâmetros, a função <strong>createSimulation</strong> vai nos retornar um objeto, com funções e valores referentes a nossa simulação:</p>
            <CodePreview code={'{\n    agents: [...], //Lista de agentes\n    population: 0, //Número da geração atual\n    highScore: 0, //Maior pontuação\n    populationBest: 0, //Melhor pontuação da geração atual\n    currentID: 0, //Variável usada internamente para identificar os agentes\n    populate: () => {...} //Função que cria uma nova geração,\n    autoPopulate: () => {...} //Esta função cria gerações automaticamente quando necessário e, retorna true quando isso ocorre\n    update: (handleUpdate) => {}, //Função que executa uma atualização em todos os agentes vivos. (handleUpdate deve ser uma função que vai receber um agente como parâmetro)\n    getAgentCount: () => {...} //Função que retorna a quantidadde de agentes vivos\n}'} lang="javascript"></CodePreview>
            <p>Além desses valores, você também pode adicionar um atributo chamado updateBest, que é uma função chamada ao final de um população, quando algum agente obtem uma pontução maior do que <strong>highScore</strong>:</p>
            <CodePreview code={'const simulation = createSimulation(...)\nsimulation.updateBest = (agent) => {\n    //Faça algo com o agente, como salvar o agent.json().\n}'} lang="javascript"></CodePreview>

        </PageContainer>
    )
}

/*
const simulation = createSimulation(
    createAgentData,        // Função que cria um objeto com as informações básicas do agente de acordo com as informações específicas da sua IA, como posição, cor... é OBRIGATÓRIO que o objeto retornado contenha a fitness function da sua IA
    populationSize,         // Quantidade de agentes filhos por geração
    populationParentAmount, // Quantidade de agentes usados para criar a próxima geração 
    mutationRate,           // Taxa de mutação 
    rnaParams               // objeto com os parâmetros da rede neural (inputCount, hLayerCount, hNeuronCount, outputCount, memoryRate, parser)
)

function createAgentData() {
    return {
        //informações dos agentes
        fitness: (agent) => {
            //retorna pontuação do agente. (essa função é obrigatória)
        }
    }
}

while (true) {
    simulation.update(agente => {
        const data = //Lista de input, com sensores e informações que a rede vai consumir
        const output = agent.predict(data)
    
        //faça algo com o output
        
        //rederize na tela
        
        //aplique a pontuação
        
        if (condição que "mata" o agente) {
            agente.dead()
            //aplicar punição
        }
    })
    
    if (simulation.autoPopulate()) {
        //Nova geração criada, use isso para resetar o ambiente da simulação 
    }
}
*/
