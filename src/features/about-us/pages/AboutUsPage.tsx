import Container from '@/features/shared/layouts/Container'
import { HeroParallax } from '@/components/ui/hero-parallax'
import Image from 'next/image'

const images = [
    '/aula-mentoria.svg',
    '/bg-depoimentos.svg',
    '/discord-logo.svg',
    '/whatsapp-logo.svg',
]

export default function AboutUsPage() {
    return (
        <div className="flex flex-col gap-7 py-6 text-xl text-justify">
            <HeroParallax images={images} />
            <Container>

            <div className="flex flex-col md:flex-row gap-7">
                <p className="flex-1">
                    A história da Cod3r começou de um jeito inusitado: nas férias. Isso mesmo! Mas
                    não porque estávamos descansando — foi exatamente o oposto. Em outubro de 2016,
                    durante as férias, tomamos uma decisão: gravar e lançar nosso primeiro curso em
                    apenas 30 dias. Entre noites mal dormidas e muita dedicação, conseguimos
                    finalizar o curso a tempo. Foi assim que nosso pequeno, e até despretensioso,
                    curso de Java, com poucas horas de conteúdo, foi publicado na Black Friday
                    daquele ano. A primeira venda aconteceu poucas horas depois, e o crescimento
                    surpreendeu até mesmo a gente, com feedbacks positivos que mostraram que
                    estávamos no caminho certo.
                </p>

                <div className="flex-1 flex flex-col gap-1 items-center self-center">
                    <Image
                        id="curso-java"
                        src="https://firebasestorage.googleapis.com/v0/b/formacao-dev.appspot.com/o/cod3r%2Fcurso-java.jpg?alt=media&token=ac4111b5-b4e4-4298-b496-76e2035050d3"
                        width={480}
                        height={270}
                        alt="Curso Java"
                        className="rounded-lg overflow-hidden self-center"
                        />
                    <label htmlFor="curso-java" className="text-sm text-zinc-400">
                        Thumbnail do Curso de Java
                    </label>
                </div>
            </div>

            <p>
                Mas nem só de acertos vive uma empresa, e algumas histórias se tornam inesquecíveis.
                Por exemplo, quem é que lembra do primeiro <strong>review negativo</strong> e ainda
                conta isso com bom humor? Pois é, depois de quase 30 avaliações positivas no nosso
                primeiro curso, chegou o fatídico dia em que apareceu uma nota de{' '}
                <strong>uma estrela</strong>, sem nenhum comentário. Ficamos nos perguntando: “O que
                será que fizemos de tão errado?”. Depois de alguns minutos lamentando, decidimos
                entrar em contato com o aluno para entender o que havia acontecido. E a resposta nos
                pegou de surpresa: “O curso é maravilhoso, mas eu briguei com minha namorada e
                estava muito chateado na hora. Desculpa por descontar a raiva em vocês”. Parece que
                até a má avaliação veio para reforçar a nossa qualidade! 😅
            </p>

            <div className="flex-1 flex flex-col md:flex-row gap-7">
                <div className="flex flex-col gap-1 items-center self-center">
                    <Image
                        id="estudio-01"
                        src="https://firebasestorage.googleapis.com/v0/b/formacao-dev.appspot.com/o/cod3r%2Festudio-01.jpeg?alt=media&token=bd4220fa-8b7d-4e1f-b03f-c3fa2885f114"
                        width={480}
                        height={270}
                        alt="Curso Java"
                        className="rounded-lg overflow-hidden self-center"
                        />
                    <label htmlFor="estudio-01" className="text-sm text-zinc-400">
                        Nosso Primeiro Estúdio
                    </label>
                </div>

                <p className="flex-1">
                    Com o passar do tempo, crescemos. Em pouco mais de um ano, conquistamos um
                    estúdio em um dos principais corredores comerciais de Fortaleza/CE, contratamos
                    estagiários e funcionários, e continuamos a gravar aulas e criar grandes
                    formações em desenvolvimento de software. Hoje, acumulamos mais de{' '}
                    <strong>10.000 aulas gravadas</strong> e impactamos quase{' '}
                    <strong>500.000 alunos</strong>. Com muito orgulho, nos tornamos uma das escolas
                    de tecnologia mais relevantes do Brasil.
                </p>
            </div>
            <div className="flex-1 flex flex-col md:flex-row gap-7">
                <p className="flex-1">
                    Em 2022, demos um grande passo com o lançamento da <strong>Formação.DEV</strong>
                    , um projeto verdadeiramente focado em levar os alunos do{' '}
                    <strong>absoluto zero ao mercado de trabalho</strong>. Dentro dessa formação,
                    oferecemos mentorias ao vivo, projetos em equipe e uma experiência que conecta
                    teoria e prática de forma única. Agora, em 2025, demos início ao desenvolvimento
                    da nossa próxima plataforma de ensino a distância, trazendo nossos alunos para o
                    centro do processo — porque acreditamos que as melhores experiências de mercado
                    nascem de relacionamentos e colaborações genuínas.
                </p>
                <div className="flex flex-col gap-1 items-center self-center">
                    <Image
                        id="estudio-02"
                        src="https://firebasestorage.googleapis.com/v0/b/formacao-dev.appspot.com/o/cod3r%2Festudio-02.jpeg?alt=media&token=a59cb80c-1f57-4259-8c72-89691d8eee87"
                        width={480}
                        height={270}
                        alt="Curso Java"
                        className="rounded-lg overflow-hidden self-center"
                        />
                    <label htmlFor="estudio-02" className="text-sm text-zinc-400">
                        Estúdio Atual
                    </label>
                </div>
            </div>

            <p>
                Nossa história começou sem CNPJ, sem endereço fixo e até sem um nome definitivo, mas
                com algo muito claro: o desejo de transformar vidas por meio da educação. Desde a
                primeira aula gravada até hoje, nosso propósito permanece o mesmo, guiado por
                fundamentos sólidos, didática de excelência e uma experiência educacional baseada em
                relacionamentos humanos.
            </p>
            <p>
                Seja bem-vindo à <strong>Cod3r Ensino</strong>, onde construímos tecnologia e
                transformamos histórias! 🚀
            </p>
        </Container>
        </div>
    )
}
