import Title from '@/features/shared/components/Title'
import TestimonyItem from './TestimonyItem'

export default function Testimonies() {
    const data = [
        {
            name: 'Anderson Jhonny',
            quote: 'Como ser um desenvolvedor com alta empregabilidade e"A Cod3r transformou a minha história. Eu era músico e fiquei desempregado por causa da pandemia. Em uma época que eu já tinha vendido tudo e estava sobrevivendo apenas do auxílio emergencial, eu conheci um curso da Cod3r e estudei com muito afinco, e por causa desse curso eu consegui entrar em uma multinacional, e eu usei tudo o que eu aprendi com o Leo. Hoje eu posso cuidar da minha família, tenho um salário incrível, e eu sou muito feliz, e a Cod3r mudou e impactou a minha história." Um mercado cada vez mais  concorrido e com a IA chegando forte',
        },
        {
            name: 'Henrique Alves',
            quote: '"Conheci o mundo da programação através de um curso da Cod3r, e o curso abriu a minha mente. Pensei que seria a coisa mais difícil do mundo realizar a transição de carreira aos 30 anos, mas a didática do Leonardo ajuda bastante a quem está começando."',
        },
        {
            name: 'Jonas Lopes',
            quote: '"Recentemente fui aprovado para trabalhar como desenvolvedor Java Júnior para o governo britânico, mais precisamente na Escócia, país no qual estou morando. Tudo o que eu aprendi com a Cod3r contribuiu bastante para a minha aprovação na entrevista técnica e assim obter a vaga."',
        },
        {
            name: 'João Oliveira',
            quote: '"Em 2020 eu estava desempregado, casado e com um filho recém nascido. Estávamos em pandemia e eu estava terminando um curso técnico totalmente sem sucesso no aprendizado. Eu já estava quase desistindo quando vi uma publicação sobre indicações de cursos de programação e os cursos do Leonardo eram unanimidade. Eu gastei meu último trocado com o curso e foi mágico. Com ele eu tive a ideia para o meu TCC, logo em seguida eu consegui um emprego como júnior e estou até hoje trabalhando na área."',
        },
        {
            name: 'Carlos Henrique',
            quote: '"Eu sempre tive dificuldade de arrumar empregos na área uma vez que eu tinha que trabalhar e estudar, mas sempre tive muita vontade de trabalhar com desenvolvimento, só não tinha muito conhecimento. Foi quando eu conheci a Cod3r e meu primeiro curso foi o de JavaScript, logo em seguida eu tive minha primeira oportunidade de trabalho. Hoje, depois de vários cursos também feitos na Cod3r, eu trabalho como fullstack e estou muito feliz na minha vida profissional."',
        },
        {
            name: 'Douglas Santanna',
            quote: '"Eu sempre tive dificuldade de arrumar empregos na área uma vez que eu tinha que trabalhar e estudar, mas sempre tive muita vontade de trabalhar com desenvolvimento, só não tinha muito conhecimento. Foi quando eu conheci a Cod3r e meu primeiro curso foi o de JavaScript, logo em seguida eu tive minha primeira oportunidade de trabalho. Hoje, depois de vários cursos também feitos na Cod3r, eu trabalho como fullstack e estou muito feliz na minha vida profissional."',
        },
    ]

    return (
        <div className="flex flex-col items-center lg:items-start gap-14">
            <Title
                main={[
                    {
                        value: 'Nossos alunos',
                        gradient: true,
                    },
                    {
                        value: 'estão falando',
                    },
                ]}
                secondary="Fundamentos e práticas que transformam a vida de nossos alunos"
            />

            <div className="lg:w-full grid grid-cols-1 lg:grid-cols-3 gap-10">
                <div className="flex flex-col gap-10">
                    <TestimonyItem name={data[0].name} quote={data[0].quote} />
                    <TestimonyItem name={data[1].name} quote={data[1].quote} />
                </div>
                <div className="flex flex-col gap-10">
                    <TestimonyItem name={data[2].name} quote={data[2].quote} />
                    <TestimonyItem name={data[3].name} quote={data[3].quote} />
                </div>
                <div className="flex flex-col gap-10">
                    <TestimonyItem name={data[4].name} quote={data[4].quote} />
                    <TestimonyItem name={data[5].name} quote={data[5].quote} />
                </div>
            </div>
        </div>
    )
}
