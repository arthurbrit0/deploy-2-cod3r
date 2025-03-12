import {
    IconApps,
    IconBrandGithub,
    IconBrandReact,
    IconCode,
    IconDatabase,
    IconRobot,
    IconServer2,
    IconTerminal,
} from '@tabler/icons-react'
import Subject from '../model/Subject'

const subjects: Subject[] = [
    {
        id: 1,
        title: 'Estudo & IA',
        description: 'Aprenda a organizar seu estudos de programação e como usar IA para te ajudar',
        icon: IconRobot,
        video: 'https://player-vz-0137cf0a-d11.tv.pandavideo.com.br/embed/?v=c7643742-41f5-4367-b727-6f2681d74177',
        content: (
            <p>
                Aprender programação pode ser um grande desafio. Com tantas linguagens, conceitos e
                técnicas diferentes, é fácil se sentir perdido, sem saber por onde começar ou qual
                caminho seguir. No entanto, com a abordagem certa e as ferramentas adequadas, é
                possível transformar esse desafio em uma jornada de aprendizado produtiva e
                prazerosa.
            </p>
        ),
    },
    {
        id: 2,
        title: 'Fundamentos',
        description: 'Aprenda programação do absoluto zero com fundamentos sólidos!',
        icon: IconCode,
        video: 'https://player-vz-0137cf0a-d11.tv.pandavideo.com.br/embed/?v=e3a061a5-b438-491b-a11a-cca4542df77b',
        content: (
            <p>
                Nesta área, você começará a construir seus conhecimentos em programação do zero, com
                uma base sólida e bem estruturada. Não importa se nunca escreveu uma linha de código
                antes; aqui, você aprenderá tudo o que precisa para dar os primeiros passos e,
                gradualmente, expandir seus conhecimentos para tópicos mais avançados.
            </p>
        ),
    },
    {
        id: 3,
        title: 'Git & Github',
        description: 'Aprenda a usar o sistema de controle de versão mais popular do mundo',
        icon: IconBrandGithub,
        video: 'https://player-vz-0137cf0a-d11.tv.pandavideo.com.br/embed/?v=38ce97b2-5f33-410d-b36c-77e14b9ebe72',
        content: (
            <p>
                O Git é a base de quase todos os projetos modernos de desenvolvimento de software,
                e, quando combinado com o GitHub, se torna uma ferramenta indispensável para quem
                trabalha com programação. Conhecer essas tecnologias é fundamental para garantir
                maior controle sobre seu código, colaborar de forma eficiente com outros
                desenvolvedores e, é claro, acessar inúmeras oportunidades no mercado de trabalho.
            </p>
        ),
    },
    {
        id: 4,
        title: 'Terminal',
        description: 'Todo desenvolvedor precisa saber usar o terminal, aprenda aqui',
        icon: IconTerminal,
        video: 'https://player-vz-0137cf0a-d11.tv.pandavideo.com.br/embed/?v=2c6e7075-0907-481c-8e2b-78bc96bb5753',
        content: (
            <p>
                Chegou a hora de deixar para trás o medo do terminal e dominar uma das ferramentas
                mais poderosas no mundo da programação! Saber usar o terminal é uma habilidade
                essencial que não só aumenta sua produtividade, mas também torna seu fluxo de
                trabalho mais eficiente, dando-lhe o controle total sobre suas ferramentas e
                projetos. Se o terminal parece intimidante ou um território desconhecido, não se
                preocupe: aqui, você vai aprender a utilizá-lo de forma simples e descomplicada.
            </p>
        ),
    },
    {
        id: 5,
        title: 'Frontend',
        description:
            'Aprenda as tecnologias mais populares do mercado: React, Next.js e Tailwind CSS',
        icon: IconBrandReact,
        video: 'https://player-vz-0137cf0a-d11.tv.pandavideo.com.br/embed/?v=8fa01af2-18db-41ec-9d54-d6fcdff76b2e',
        content: (
            <p>
                Se você quer se destacar no mundo do desenvolvimento web, aprender as tecnologias
                mais requisitadas pelas empresas é essencial, e React, Next.js e Tailwind CSS estão
                entre as mais populares do mercado. Dominá-las formará uma poderosa stack que
                permitirá criar websites modernos, rápidos e dinâmicos, com um processo de
                desenvolvimento ágil e eficiente. Não importa se você está começando ou já tem
                experiência: aprender essas ferramentas será um grande diferencial, capacitando-o a
                desenvolver projetos incríveis e a se destacar no mercado de trabalho.
            </p>
        ),
    },
    {
        id: 6,
        title: 'Banco de Dados',
        description: 'Aprenda os fundamentos de banco de dados relacionais e não relacionais',
        icon: IconDatabase,
        video: 'https://player-vz-0137cf0a-d11.tv.pandavideo.com.br/embed/?v=5ef840f1-d365-4f48-a171-19984de87d47',
        content: (
            <p>
                Entender como armazenar, organizar e acessar dados de maneira eficiente é uma
                habilidade essencial para quem desenvolve código. Se você quer dominar o mundo do
                desenvolvimento e ser capaz de criar aplicações poderosas, aprender sobre bancos de
                dados relacionais e não relacionais é um passo crucial. Aqui, você vai aprender os
                conceitos fundamentais desses dois tipos de bancos de dados, como usá-los de forma
                eficaz.
            </p>
        ),
    },
    {
        id: 7,
        title: 'Backend',
        description: 'Aprenda a criar APIs com Node.js, Express, Nest, MongoDB e PostgreSQL',
        icon: IconServer2,
        video: 'https://player-vz-0137cf0a-d11.tv.pandavideo.com.br/embed/?v=3ebcdad3-77f3-4a7b-af1c-c37264b50e1a',
        content: (
            <p>
                Se você quer se tornar um desenvolvedor full-stack, é preciso dedicar tempo ao
                back-end. Nesta área, você vai dominar se aprofundar em ferramentas poderosas para
                construir APIs que atendam às necessidades de sistemas e aplicativos modernos.
            </p>
        ),
    },
    {
        id: 8,
        title: 'Projetos',
        description: 'Projetos práticos e progressivos para você aplicar tudo que aprendeu',
        icon: IconApps,
        video: 'https://player-vz-0137cf0a-d11.tv.pandavideo.com.br/embed/?v=ff7d89fb-a1f6-418f-b519-9b4cf6648e83',
        content: (
            <p>
                Nada melhor do que aprender na prática para consolidar o conhecimento e realmente
                entender como as tecnologias funcionam no mundo real. Ao colocar a mão na massa,
                você não só reforça o aprendizado teórico, mas também desenvolve a capacidade de
                resolver problemas, tomar decisões rápidas e se adaptar a diferentes cenários,
                habilidades essenciais para se destacar no campo da tecnologia.
            </p>
        ),
    },
]

export default subjects
